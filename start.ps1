Write-Host "Building and starting Docker containers..." -ForegroundColor Green
docker compose up --build -d

if ($LASTEXITCODE -eq 0) {
    Write-Host "Docker containers are running." -ForegroundColor Green
    $APP_URL = "http://localhost:5010"
    Write-Host "Application available at: $APP_URL" -ForegroundColor Yellow
    Start-Process $APP_URL
} else {
    Write-Host "Failed to start Docker containers." -ForegroundColor Red
}
