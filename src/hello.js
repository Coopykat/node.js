require('dotenv').config()
console.log(`I am ${process.env.MY_NAME}`);
console.log(`I live in ${process.env.MY_CITY}`)
console.log(`and I love ${process.env.MY_LANGUAGE}`)

const http = require('http');

// Read the host address and the port from the environment
const hostname = process.env.HOST;
const port = process.env.PORT;

// Return JSON regardless of HTTP method or route our web app is reached by
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`{"message": "Hello World"}`);
});

// Start a TCP server listening for connections on the given port and host
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
