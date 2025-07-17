const users = require("./MOCK_DATA.json");

const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/api/user", (req, res) => {
//   res.json(users);
// });

// app.get("/api/user/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find((e) => e.id === userId);
//   return res.json(user);

//   //   res.json(users);
// });

app
  .route("/api/user/:id")
  .get((req, res) => {
    const userId = Number(req.params.id);
    const user = users.find((e) => e.id === userId);
    return res.json(user);
  })
  .delete((req, res) => {
    const p = req.params.id;
    const index = users.findIndex((e) => e.id === p);

    if (index === -1) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    users.splice(index, 1);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res
          .status(500)
          .json({ status: "error", message: "Failed to delete user" });
      }

      return res.status(200).json({ status: "deleted" });
    });
  });

app.post("/api/users", (req, res) => {
  const data = req.body;

  console.log(data);
  // const userName = body.first_name;

  const ifFound = users.filter((e) => e.first_name === userName);
  console.log(ifFound);
  return ifFound;

  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   if (err) return res.status(500).json({ status: "error" });

  //   return res.status(200).json({ status: "updated" });
  // });
  // console.log(body);
  // // return res.json({ status: "pending" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
