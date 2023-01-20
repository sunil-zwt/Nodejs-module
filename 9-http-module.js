const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home page");
  }
  else if (req.url === "/about") {
    res.end("This is our about page");
  }else{
    res.end(`<h1>Opps!</h1>
    <p>We can't seem to find page you are looking for</p>
    <a href='/'>Back Home</a>`)
  }
});

server.listen(5000);
