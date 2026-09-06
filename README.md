TP1 - API FastAPI con 3 réplicas y NGINX

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
   (solo la primera vez): docker-compose up --build -d
   (2da vez en adelante): docker-compose up -d

2. Verificar que los servicios estén arriba:

   docker-compose ps

3. Probar el endpoint (abrir en navegador o usar curl):

   http://localhost:8080/

   Repetir varias veces; la respuesta será algo como:
   {"message":"soy la replica 2"}

4. Ver logs (ejemplo de nginx):

   docker-compose logs -f nginx

5. Parar y remover contenedores:

   docker-compose down

Notas y consejos
----------------
- Cada servicio API recibe la variable de entorno REPLICA_ID (definida en docker-compose.yml). Si no está, devuelve el hostname.
- Si el puerto 8080 está en uso, editar el mapeo en docker-compose.yml (nginx -> "HOST:CONTAINER").
- Para levantar solo una réplica: docker-compose up --build api1

Contacto
-------
Para dudas, preguntar al autor del trabajo práctico.
