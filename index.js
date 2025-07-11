const http = require("http");
const fs = require("fs");
const url = require("url");

const express = require("express");
const app = express();




app.get("/", (req, res) => {
  return res.send("Home page!");
});

app.get("/contact", (req, res) => {
  return res.send("contact!");
});

app.get("/about", (req, res) => {
  return res.send("about " + req.query.username);
});

// const myServer = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") return res.end();

//   const myUrl = url.parse(req.url, true);
//   console.log("Request URL:", myUrl);

//   const logData = `Request received at: ${new Date().toISOString()} on ${
//     req.url
//   }\n`;

//   fs.appendFile("log.txt", logData, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("Home page!");
//         break;
//       case "/contact":
//         const username = myUrl.query.username || "Guest";
//         res.end(`hello ${username}, welcome to the contact page!`);
//         break;
//       case "/about":
//         res.end("About page!");
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end(`hello you searched for ${search}`);
//         break;
//       default:
//         res.end("404 Not Found!");
//     }
//     if (err) {
//       console.error("Error writing to log file:", err);
//     }
//   });
// });

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port on http://localhost:${port}/`);
});
