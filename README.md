# TP1 DevOps

![CI Pipeline](https://github.com/yamilmoselli/tp1devops/actions/workflows/ci.yml/badge.svg)
![SAST Security](https://img.shields.io/badge/SAST--Security-Passed-brightgreen?style=flat&logo=shield)

## Descripción
Proyecto de arquitectura distribuida stateless con Nginx, réplicas de API en FastAPI y Redis.
Descripción
-----------
Proyecto de ejemplo: una API sencilla en Python (FastAPI) empaquetada en Docker y balanceada por NGINX. 
Cada réplica devuelve su identificador para verificar cuál respondió.

Requisitos
---------
- Docker Engine
- Docker Compose (si tu Docker incluye Compose, está ok)

Instrucciones
------------
1. Desde la raíz del proyecto ejecutar:

   (para linux): sudo service docker start
   (solo la primera vez): docker-compose up --build -d (otra opción: docker compose up --build -d)
   (2da vez en adelante): docker-compose up -d (docker compose up -d)

2. Verificar que los servicios estén arriba:

   docker-compose ps

3. Probar el endpoint (abrir en navegador o usar curl):

   http://localhost:8080/

   Repetir varias veces; la respuesta será algo como:
   {"message":"soy la replica 2"}

4. Ver logs (ejemplo de nginx):

   docker-compose logs -f nginx

5. Parar y remover contenedores:
    
    docker compose stop
   docker-compose down (docker compose down)

Notas y consejos
----------------
- Cada servicio API recibe la variable de entorno REPLICA_ID (definida en docker-compose.yml). Si no está, devuelve el hostname.
- Si el puerto 8080 está en uso, editar el mapeo en docker-compose.yml (nginx -> "HOST:CONTAINER").
- Para levantar solo una réplica: docker-compose up --build api1

Contacto
-------
Para dudas, preguntar al autor del trabajo práctico.

Tests
-----
Requisitos: Python 3.8+ y pip.

Linux / macOS
1. python -m venv .venv
2. source .venv/bin/activate
3. pip install -r app/requirements.txt
4. pytest -q

Windows (PowerShell)
1. python -m venv .venv
2. .\.venv\Scripts\Activate.ps1
3. pip install -r app\requirements.txt
4. pytest -q

Notas
- Para ejecutar solo los tests en la carpeta app: pytest app
- Si no se quiere crear un virtualenv, instalar pytest globalmente: pip install pytest
