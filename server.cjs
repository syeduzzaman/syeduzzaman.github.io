const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = Number(process.env.PORT || 4173);
const allowed = new Set(['index.html', 'styles.css', 'app.js', 'i18n.js', 'resume.html', 'portrait.png']);
const types = { '.png': 'image/png', '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
http.createServer((req, res) => {
  const requested = new URL(req.url, 'http://localhost').pathname;
  const name = requested === '/' ? 'index.html' : requested.slice(1);
  if (!allowed.has(name)) { res.writeHead(404); res.end('Not found'); return; }
  fs.readFile(path.join(root, name), (error, data) => {
    if (error) { res.writeHead(500); res.end('Unable to read file'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(name)], 'X-Content-Type-Options': 'nosniff' });
    res.end(data);
  });
}).listen(port, '127.0.0.1', () => console.log(`Portfolio preview: http://127.0.0.1:${port}`));
