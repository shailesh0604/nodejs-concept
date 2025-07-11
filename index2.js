const users = require("./MOCK_DATA.json");

const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/user", (req, res) => {
  res.json(users);
});

app.get("/api/user/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((e) => e.id === userId);
  return res.json(user);

  //   res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
