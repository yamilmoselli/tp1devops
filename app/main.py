import os
import socket
from fastapi import FastAPI

app = FastAPI()

REPLICA_ID = os.getenv("REPLICA_ID")
HOSTNAME = socket.gethostname()

@app.get("/")
async def root():
    identifier = REPLICA_ID or HOSTNAME
    return {"message": f"soy la replica {identifier}"}
