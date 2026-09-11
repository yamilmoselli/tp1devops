import os
import socket
from fastapi import FastAPI, Request
from redis import Redis
from redis.exceptions import RedisError

app = FastAPI()

REPLICA_ID = os.getenv("REPLICA_ID")
HOSTNAME = socket.gethostname()
REDIS_HOST = os.getenv("REDIS_HOST", "redis")
REDIS_PORT = int(os.getenv("REDIS_PORT", "6379"))

redis_client = Redis(host=REDIS_HOST, port=REDIS_PORT, decode_responses=True)


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


@app.get("/")
async def root():
    identifier = REPLICA_ID or HOSTNAME
    return {"message": f"soy la replica {identifier}"}


@app.get("/visitas")
async def visitas():
    return {"visitas": get_visits()}
