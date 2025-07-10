const fs = require("fs");
// creating a file in the current directory
// fs.writeFileSync("./text.txt", "Hello, World!");

// reading file synchornously
// const result = fs.readFileSync("./contact.txt", "utf8");

// reading file asynchornously
fs.readFile("./contact.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  } else {
    console.log("File content:", data);
  }
});

// adding new line to the file
// fs.appendFileSync("./contact.txt", "\nThis is a new line added to the file.");

// copy the same file data into another file
// fs.copyFileSync("./contact.txt", "./contact_copy.txt");
// console.log("File copied successfully.");

// delete the copied file
// fs.unlinkSync("./contact_copy.txt");
// console.log("File deleted successfully.");

// create directory
// fs.mkdirSync("/abc/a/b/c/", { recursive: true });
// console.log("Directory created successfully.");

// static of file

fs.statSync("./contact.txt", (err, stats) => {
  if (err) {
    console.error("Error getting file stats:", err);
    return;
  }
  console.log("File stats:", stats);
});
