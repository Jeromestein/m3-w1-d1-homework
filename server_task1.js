const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Home Page.');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About Page.');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('Contact Page.');
  } else {
    res.statusCode = 404;
    res.end('Invalid Request!');
  }
});

// Start the server and listen on port 5000
server.listen(5000, () => {
  console.log('The NodeJS server on port 5000 is now running….');
});
