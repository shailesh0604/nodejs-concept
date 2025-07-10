const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log("Request received:", req.headers);
  res.end("Hello From Server!!");
});

const port = 5000;

myServer.listen(port, () => {
  console.log(`Server is running on port on http://localhost:${port}/`);
});
