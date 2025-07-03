const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '';
  if (req.url === '/' || req.url === '/home') {
    filePath = path.join(__dirname, 'home.html');
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'about.html');
  } else if (req.url === '/contact') {
    filePath = path.join(__dirname, 'contact.html');
  } else {
    filePath = null;
  }

  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(5000, () => {
  console.log('The NodeJS server on port 5000 is now running....');
});
