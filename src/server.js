const http = require('http');

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || '1.0.0';

const server = http.createServer((req, res) => {
    if (req.url === '/health' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ status: 'ok' }));
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        app: 'cicd-ops',
        version: VERSION,
        status: 'ok',
        timestamp: new Date().toISOString(),
    }));
});

console.log(`Starting server version ${VERSION} ....`);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}, version ${VERSION}`);
});