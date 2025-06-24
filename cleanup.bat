@echo off
echo Stopping and removing Docker containers...
docker compose down

echo Removing Docker images...
docker rmi agente_assessor-app 2>nul

echo Cleanup completed.
