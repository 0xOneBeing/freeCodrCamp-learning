const fs = require("fs");
const path = "./";

const directoryList = document.getElementById("directory-list");

fs.readdir(path, (err, files) => {
  if (err) {
    console.error("Error reading folder", err);
    return;
  }
  console.log("Files in the folder", files);
  files.forEach((file) => {
    const li = document.createElement("li");
    li.textContent = file;
    directoryList.appendChild(li);
  });
});
