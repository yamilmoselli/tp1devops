# TP1 DevOps — Fulbito5

![CI Pipeline](https://github.com/yamilmoselli/tp1devops/actions/workflows/ci.yml/badge.svg)
![SAST](https://github.com/yamilmoselli/tp1devops/actions/workflows/sast.yml/badge.svg)

## Descripción
Fulbito5 es un armador y balanceador de equipos de fútbol 5: se cargan 10 jugadores con dos
atributos (ataque y defensa), se arman dos equipos de 5 minimizando la diferencia de nivel entre
ambos, y cada partido armado queda guardado en Redis.

Arquitectura: una web en React, una API en FastAPI (único servicio con acceso a Redis, corrida
en 3 réplicas), Redis como almacén, y Nginx como reverse proxy que balancea round-robin entre las
3 réplicas de la API y sirve la web. Es la misma base stateless de réplicas + Nginx + Redis con la
que arrancó el proyecto, extendida con el dominio de partidos, la interfaz web y el pipeline
completo de CI/CD.

Los badges de arriba reflejan el estado real de dos workflows separados: `ci.yml` corre los tests
unitarios (y publica las imágenes a Docker Hub al mergear a `main`), y `sast.yml` corre Bandit
(análisis estático de código Python) y Trivy (escaneo de configuración/Dockerfiles), cortando el
pipeline si encuentra algo `HIGH`/`CRITICAL`.

### Endpoints de la API

| Método | Ruta                | Descripción                                       |
|--------|---------------------|----------------------------------------------------|
| GET    | `/health`           | Chequeo de salud del contenedor                     |
| GET    | `/api/`             | Identidad de la réplica (`soy la replica N`)        |
| GET    | `/api/visitas`      | Contador total de requests, guardado en Redis       |
| GET    | `/api/info`         | hostname, IP, uptime, visitas y total de partidos   |
| POST   | `/api/partidos`     | Recibe 10 jugadores, balancea y guarda en Redis     |
| GET    | `/api/partidos`     | Lista los partidos guardados                        |
| GET    | `/api/partidos/:id` | Detalle crudo de un partido                         |

### Datos en Redis

- `api:visitas` — contador incrementado en cada request (middleware de la API).
- `partido:<id>` — hash con `id`, `fecha`, `equipo_a`, `equipo_b` y `delta` de cada partido armado.
- `partidos:indice` — set con los ids de todos los partidos, para listarlos sin escanear.

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

3. Abrir la web en el navegador:

   http://localhost:8080/

   Ahí se puede cargar jugadores, balancear equipos y ver el historial guardado en Redis.

4. Probar el balanceo de réplicas directamente contra la API (curl):

   for i in 1 2 3 4 5 6; do curl -s http://localhost:8080/api/; echo; done

   Repetir varias veces; la respuesta va a rotar entre las 3 réplicas:
   {"message":"soy la replica 2"}

5. Demostrar tolerancia a la caída de una instancia:

   docker stop tp1devops-api2-1   # o el nombre real del contenedor, ver "docker compose ps"
   # repetir el curl del paso anterior: sigue respondiendo con las 2 réplicas restantes
   docker start tp1devops-api2-1

6. Ver logs (ejemplo de nginx):

   docker-compose logs -f nginx

7. Parar y remover contenedores:
    
    docker compose stop
   docker-compose down (docker compose down)

Notas y consejos
----------------
- Cada servicio API recibe la variable de entorno REPLICA_ID (definida en docker-compose.yml). Si no está, devuelve el hostname.
- Si el puerto 8080 está en uso, editar el mapeo en docker-compose.yml (nginx -> "HOST:CONTAINER").
- Para levantar solo una réplica: docker-compose up --build api1

Deploy en Render (cloud)
------------------------
Se despliega desde las imágenes publicadas en Docker Hub por el job `build-and-push` (no build en Render):

1. **Redis**: crear una instancia de *Render Key Value* (plan free) o, si no está disponible, una base gratuita en [Upstash](https://upstash.com/). Copiar host y puerto.
2. **API**: en Render, *New → Web Service → Deploy an existing image from a registry*, imagen `docker.io/<usuario>/fulbito5-api:latest`. Variables de entorno `REDIS_HOST` y `REDIS_PORT` apuntando al Redis del paso 1. Con una instancia alcanza para cumplir la consigna; escalar a más es una mejora opcional.
3. **Web**: mismo mecanismo con `docker.io/<usuario>/fulbito5-web:latest`. Si la web queda en un dominio distinto al de la API, ajustar los `fetch` de `web/src` para apuntar a la URL pública de la API en vez de rutas relativas `/api/...`.
4. Verificar `https://<tu-api>.onrender.com/health` y `https://<tu-web>.onrender.com`.

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
