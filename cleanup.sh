#!/bin/bash

echo "Stopping and removing Docker containers..."
docker compose down

echo "Removing Docker images..."
docker rmi $(docker images -q --filter "label=com.docker.compose.project=agente-de-analise-de-processos-judiciais") --force

echo "Cleanup complete."
