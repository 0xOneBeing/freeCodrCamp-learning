// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     const folderPath = "./";
//     fs.readdir(folderPath, (err, files) => {
//       if (err) {
//         console.error("Error reading folder: ", err);
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Internal Server Error");
//         return;
//       }

//       const li = files
//         .map(
//           (file) =>
//             `<li><a href="./${file}/index.html" target="_blank" >${file}</a></li>`
//         )
//         .join("");
//       const htmlResponse = `
//         <!DOCTYPE html>
//         <html lang="en">
//             <head>
//                 <meta charset="UTF-8" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <title>Playground</title>
//             </head>
//             <body>
//                 <h1>List of Files</h1>
//                 <ul>${li}</ul>
//             </body>
//         </html>
//       `;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(htmlResponse);
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const rootFolderPath = "./";

    fs.readdir(rootFolderPath, (err, files) => {
      if (err) {
        console.error("Error reading folder:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }

      const listItems = files
        .map((file) => {
          const fullPath = path.join(rootFolderPath, file);
          const isDirectory = fs.statSync(fullPath).isDirectory();
          return `<li>${
            isDirectory
              ? `<a href="./${file}" target="_blank">${file}</a>`
              : file
          }</li>`;
        })
        .join("");

      const htmlResponse = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>File List</title>
        </head>
        <body>
          <h1>List of Files and Subfolders</h1>
          <ul>${listItems}</ul>
        </body>
        </html>
      `;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(htmlResponse);
    });
  } else {
    const requestedPath = path.join("./", req.url);

    // Check if an index.html file exists in the subfolder
    const indexPath = path.join(requestedPath, "index.html");
    if (fs.existsSync(indexPath)) {
      // Serve the content of the index.html file
      fs.readFile(indexPath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading index.html:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      // Display the list of files in the subfolder
      fs.readdir(requestedPath, (err, files) => {
        if (err) {
          console.error("Error reading subfolder:", err);
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not Found");
          return;
        }

        const listItems = files.map((file) => `<li>${file}</li>`).join("");

        const htmlResponse = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Subfolder - ${req.url}</title>
          </head>
          <body>
            <h1>List of Files in Subfolder ${req.url}</h1>
            <ul>${listItems}</ul>
          </body>
          </html>
        `;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlResponse);
      });
    }
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
