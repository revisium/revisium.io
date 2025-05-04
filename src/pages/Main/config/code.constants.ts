export const CURRENT_VERSION = 'v0.11.0-rc.1'

export const DOCKER_CODE = `docker run -d  --name revisium  --env DATABASE_URL="postgresql://<db_user>:<db_password>@host.docker.internal:5432/<database> -p 8080:8080 revisium/revisium:${CURRENT_VERSION}`

export const DOCKER_COMPOSE_CODE = `

services:
  db:
    image: postgres:17.4-alpine
    restart: always
    environment:
      POSTGRES_DB: revisium-dev
      POSTGRES_USER: revisium
      POSTGRES_PASSWORD: password
  revisium:
    pull_policy: always
    depends_on:
      - db
    image: revisium/revisium:${CURRENT_VERSION}
    ports:
      - 8080:8080
      - 5555:5555
    environment:
      DATABASE_URL: postgresql://revisium:password@db:5432/revisium-dev?schema=public
      # ADMIN_PASSWORD:
      # METRICS_ENABLED: "true"
      # GRACEFUL_SHUTDOWN_TIMEOUT: 10000
      # FILE_PLUGIN_PUBLIC_ENDPOINT: 
      # S3_ENDPOINT: 
      # S3_REGION: 
      # S3_BUCKET: 
      # S3_ACCESS_KEY_ID: 
      # S3_SECRET_ACCESS_KEY: 

`
