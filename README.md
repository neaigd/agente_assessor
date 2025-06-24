# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

**Choose one of the following methods to run the application:**

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Run Services Directly

This project's backend services (Node.js server and Nginx) can be run directly on your host machine using the `start_services.sh` script.

**Prerequisites:** Node.js and Nginx installed and configured.

1.  **Set environment variables:** Ensure you have the necessary environment variables set, including `GEMINI_API_KEY`. You can set these in your shell or use a `.env` file loaded by your application.

2.  **Make script executable:** Give execution permissions to the startup script.
    ```bash
    chmod +x start_services.sh
    ```

3.  **Start the services:** Run the `start_services.sh` script. This will start the Node.js server and Nginx in the background.
    ```bash
    ./start_services.sh
    ```

## Run with Docker

This project can also be run using Docker containers.

**Prerequisites:** Docker and Docker Compose installed.

1.  **Create `.env.local`:** Copy the example environment file and add your API key.
    ```bash
    cp .env.local.example .env.local
    ```
    Edit `.env.local` and replace `"inclua aqui sua chave api"` with your actual Gemini API Key.

2.  **Make scripts executable:** Give execution permissions to the startup and cleanup scripts.
    ```bash
    chmod +x start.sh cleanup.sh
    ```

3.  **Start the application:** Run the `start.sh` script. This will build the Docker image (if necessary), start the containers, and open the application in your browser on ports 5010 and 88.
    ```bash
    ./start.sh
    ```

4.  **Clean up:** To stop and remove the Docker containers and images, run the `cleanup.sh` script.
    ```bash
    ./cleanup.sh
    ```
