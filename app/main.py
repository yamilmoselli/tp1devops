import json
import os
import socket
import time
import uuid
from datetime import datetime, timezone

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from redis import Redis
from redis.exceptions import RedisError

from balanceo import Jugador, balancear

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

REPLICA_ID = os.getenv("REPLICA_ID")
HOSTNAME = socket.gethostname()
REDIS_HOST = os.getenv("REDIS_HOST", "redis")
REDIS_PORT = int(os.getenv("REDIS_PORT", "6379"))

redis_client = Redis(host=REDIS_HOST, port=REDIS_PORT, decode_responses=True)

_INICIO = time.time()
INDICE_KEY = "partidos:indice"


def get_visits() -> int:
    try:
        value = redis_client.get("api:visitas")
        return int(value) if value is not None else 0
    except RedisError:
        return 0


@app.middleware("http")
async def count_requests(request: Request, call_next):
    try:
        redis_client.incr("api:visitas")
    except RedisError:
        pass
    return await call_next(request)


@app.get("/api")
async def root():
    identifier = REPLICA_ID or HOSTNAME
    return {"message": f"soy la replica {identifier}"}


@app.get("/api/visitas")
async def visitas():
    return {"visitas": get_visits()}


@app.get("/api/health")
def health():
    return {"status": "ok"}


def _ip() -> str:
    try:
        return socket.gethostbyname(HOSTNAME)
    except socket.gaierror:
        return "desconocida"


@app.get("/api/info")
def info():
    return {
        "hostname": REPLICA_ID or HOSTNAME,
        "ip": _ip(),
        "uptime": round(time.time() - _INICIO, 2),
        "visitas": get_visits(),
        "partidosTotal": redis_client.scard(INDICE_KEY),
    }


class JugadorIn(BaseModel):
    nombre: str
    ataque: int = Field(ge=1, le=5)
    defensa: int = Field(ge=1, le=5)


class PartidoIn(BaseModel):
    jugadores: list[JugadorIn]


def _guardar_partido(resultado: dict) -> dict:
    partido_id = str(uuid.uuid4())
    fecha = datetime.now(timezone.utc).isoformat()
    registro = {
        "id": partido_id,
        "fecha": fecha,
        "equipo_a": json.dumps(resultado["equipo_a"]),
        "equipo_b": json.dumps(resultado["equipo_b"]),
        "delta": resultado["delta"],
    }
    redis_client.hset(f"partido:{partido_id}", mapping=registro)
    redis_client.sadd(INDICE_KEY, partido_id)
    return _deserializar(registro)


def _deserializar(registro: dict) -> dict:
    return {
        "id": registro["id"],
        "fecha": registro["fecha"],
        "equipo_a": json.loads(registro["equipo_a"]),
        "equipo_b": json.loads(registro["equipo_b"]),
        "delta": int(registro["delta"]),
    }


@app.post("/api/partidos")
def crear_partido(partido: PartidoIn):
    if len(partido.jugadores) != 10:
        raise HTTPException(status_code=400, detail="Se requieren exactamente 10 jugadores")

    jugadores: list[Jugador] = [j.model_dump() for j in partido.jugadores]
    resultado = balancear(jugadores)
    return _guardar_partido(resultado)


@app.get("/api/partidos")
def listar_partidos():
    ids = redis_client.smembers(INDICE_KEY)
    partidos = []
    for partido_id in ids:
        registro = redis_client.hgetall(f"partido:{partido_id}")
        if registro:
            partidos.append(_deserializar(registro))
    partidos.sort(key=lambda p: p["fecha"], reverse=True)
    return partidos


@app.get("/api/partidos/{partido_id}")
def obtener_partido(partido_id: str):
    registro = redis_client.hgetall(f"partido:{partido_id}")
    if not registro:
        raise HTTPException(status_code=404, detail="Partido no encontrado")
    return _deserializar(registro)
