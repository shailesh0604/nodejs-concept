const fs = require("fs");

//blocking requests
// console.log("Blocking read started...");
// const data = fs.readFileSync("./contact.txt", "utf8");
// console.log("Blocking read:", data);
// console.log("Blocking read Done...");

//non-blocking requests
// console.log("Non-Blocking read started...");
const data = fs.readFile("./contact.txt", "utf8", (err, data) => {
  if (err) {
    // console.error("Error reading file:", err);
    return;
  } else {
    // console.log("Result:", data);
  }
});

// console.log("Non-Blocking read Done...");

const os = require("os");
console.log("OS Type:", os.type());
console.log("OS Platform:", os.platform());
console.log("OS Release:", os.release());
console.log("OS Architecture:", os.arch());
console.log("OS CPU Info:", os.cpus());
console.log("OS CPU Info:", os.cpus().length);
