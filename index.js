const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const logData = `Request received at: ${new Date().toISOString()} on ${
    req.url
  }\n`;

  fs.appendFile("log.txt", logData, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home page!");
        break;
      case "/contact":
        res.end("Contact page!");
        break;
      case "/about":
        res.end("About page!");
        break;
      default:
        res.end("404 Not Found!");
    }
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
});

const port = 5000;

myServer.listen(port, () => {
  console.log(`Server is running on port on http://localhost:${port}/`);
});
