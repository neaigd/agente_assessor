#!/bin/sh

# Start the Node.js backend server in background
echo "Starting Node.js backend server..."
node server.js &

# Wait a moment for backend to start
sleep 2

# Start Nginx in foreground
echo "Starting Nginx..."
nginx -g 'daemon off;'
