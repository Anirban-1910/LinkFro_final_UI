# WebSocket Server Deployment Guide

This application uses WebSockets for real-time chat functionality. Since Vercel doesn't support long-running WebSocket servers, you need to deploy the WebSocket server separately.

## Option 1: Deploy WebSocket Server to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following build command:
   ```
   npm install
   ```
4. Set the start command:
   ```
   node websocket-server.js
   ```
5. Add the following environment variables:
   - PORT=3001 (or any port you prefer)
6. Set the health check path to `/` if needed

## Option 2: Deploy WebSocket Server to Railway

1. Create a new project on Railway
2. Connect your GitHub repository
3. Railway will automatically detect the start command from your package.json
4. Add the following environment variables:
   - PORT=3001 (or any port you prefer)

## Option 3: Deploy WebSocket Server to a VPS

1. Set up a Node.js environment on your VPS
2. Clone your repository
3. Install dependencies:
   ```
   npm install
   ```
4. Start the WebSocket server:
   ```
   node websocket-server.js
   ```
5. Set up a reverse proxy (nginx, Apache, etc.) to handle WebSocket connections
6. Configure SSL if needed

## Environment Variables

After deploying your WebSocket server, update the following environment variable in your Vercel project:

- `NEXT_PUBLIC_WS_URL`: Set to the URL of your deployed WebSocket server (e.g., `wss://your-websocket-server.onrender.com`)

## Testing WebSocket Connection

After deployment, you can test the WebSocket connection by:

1. Visiting your deployed application
2. Opening the browser's developer tools
3. Checking the console for WebSocket connection messages
4. Trying to send a message through the chat interface

## Troubleshooting

If you encounter issues with WebSocket connections:

1. Check that your WebSocket server is running and accessible
2. Verify that the `NEXT_PUBLIC_WS_URL` environment variable is correctly set
3. Ensure that your reverse proxy (if used) is properly configured to handle WebSocket upgrades
4. Check firewall settings to ensure the WebSocket port is open
5. Verify SSL certificates if using wss:// connections