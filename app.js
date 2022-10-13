const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>welcome to HOME PAGE</h1>");
  } else if (req.url === "/about") {
    res.end("<h1> this is the about page </h1>");
  } else {
    res.end(
      `<h1> Uaiva</h1> <h3> parece que no hay endpoint en ${req.url} </h3> <a href="/"> Back home</a>`
    );
  }
  res.end();
});

const PORT = 5000;

server.listen(PORT);
