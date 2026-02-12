const http = require('http');

const PORT = process.env.PORT || 3002;
const VERSION = process.env.APP_VERSION || '1.0.0';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        app: 'actions-argo-k8s',
        version: VERSION,
        status: 'ok',
        timestamp: new Date().toISOString(),
    }));
});

console.log(`Starting server version ${VERSION}`);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}, version ${VERSION}`);
});