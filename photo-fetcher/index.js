const http = require('http');
const url = require('url');
const { getPhotos } = require('./dataStore');

// Create HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight (OPTIONS) request
  if (req.method === 'OPTIONS') {
    res.writeHead(204); // No content
    res.end();
    return;
  }

  // Check if the request is for the photos endpoint
  if (parsedUrl.pathname === '/photos' && req.method === 'GET') {
    // Extract query parameters for pagination
    const { limit = 10, page = 1, orderBy = 'id' } = parsedUrl.query;

    // Fetch paginated data
    const photos = getPhotos({ limit: parseInt(limit), orderBy, page: parseInt(page) });

    // Return JSON response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data: photos }));
  } else {
    // Handle 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
