# APP

First, build the docker image

-   docker volume create db_data
-   docker network create db_cluster
-   docker-compose up --build

start db server

-   docker-compose up

start api server

-   yarn dev

api:

-   http://localhost:3000/api

# DB

adminer: http://localhost:8888

master_db:

-   server: pg_master
-   username: postgres
-   password: 00

replica_db:

-   server: pg_slave:5433
-   username: postgres
-   password: 00

# TODOS (fixes)

-   [ ] fix the getVisitedRestaurants, this requires fixing \ it is in src/dinein/dinein.service
