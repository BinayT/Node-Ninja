const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content-type to application/

  res.setHeader("Content-Type", "text/html");

  /* res.write("hello world");
  res.end(); */

  //Sending Static files
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  fs.readFile(`${path}`, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.statusCode = 200;
      res.end(data);
    }
  });
});

server.listen(5000, () => console.log("Server listening on port 5000"));
