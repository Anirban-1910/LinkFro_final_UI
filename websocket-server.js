const { WebSocketServer } = require('ws');
const { createServer } = require('http');

const server = createServer((req, res) => {
  // Health check endpoint
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server is running');
    return;
  }
  
  // 404 for all other routes
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws, request) => {
  console.log('Client connected from:', request.socket.remoteAddress);

  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message.toString());
      
      // Broadcast the message to all connected clients except the sender
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === client.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

const PORT = process.env.PORT || process.env.WS_PORT || 3001;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing WebSocket server...');
  wss.close(() => {
    console.log('WebSocket server closed');
  });
  server.close(() => {
    console.log('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, closing WebSocket server...');
  wss.close(() => {
    console.log('WebSocket server closed');
  });
  server.close(() => {
    console.log('HTTP server closed');
  });
});

// Export for Vercel compatibility
module.exports = server;