1. CREATE NETWORK FOR TWO CONTAINERS:

docker network create my-network

2. BUILD DOCKER IMAGE:

docker build -t nodejs-app .

3. RUN POSTGRESQL CONTAINER:

docker run -d   --name postgres-container   --network my-network   -e POSTGRES_DB=schedule_optimizer   -e POSTGRES_PASSWORD=abbos2504   -p 5432:5432   postgres

4. RUN NODEJS CONTAINER:

docker run -d   --name nodejs-container   --network my-network   -p 3000:3000   -e DB_USERNAME=postgres   -e DB_HOST=postgres-container   -e DB_NAME=schedule_optimizer   -e DB_PASSWORD=abbos2504   -e DB_PORT=5432   nodejs-app

5. CONNECT TO THE POSTGRESQL CONTAINER:

docker exec -it postgres-container psql -U postgres -d schedule_optimizer

6. LIST ALL TABLES

\dt

8. Open localhost:3000 and then immediately go to the next step

7. CHANGE DATA TYPE OF A COLUMN:

ALTER TABLE sessions 
ALTER COLUMN sid TYPE character varying(64);

8. GO BACK TO localhost:3000
EMAIL - abbosshodiev@webster.edu
PASSWORD = Abbos2504

9. Stop CONTAINERS:

docker stop postgres-container 

docker stop nodejs-container
