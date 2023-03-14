# APP

start db server

-   docker volume create db_data
-   docker network create db_cluster
-   docker-compose up --build

start api server

-   yarn dev

api:

-   http://localhost:3000/api

# DB

adminer: http://localhost:8888

master_db:
server: pg_master
username: postgres
password: 00
db: dinein-recommender

replica_db:
server: pg_slave
username: postgres
password: 00
db: dinein-recommender

