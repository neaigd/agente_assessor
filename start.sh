#!/bin/bash

echo "Building and starting Docker containers..."
docker compose up --build -d

if [ $? -eq 0 ]; then
  echo "Docker containers are running."
  APP_URL="http://localhost:5010"
  echo "Application available at: $APP_URL"
  xdg-open $APP_URL
else
  echo "Failed to start Docker containers."
fi
