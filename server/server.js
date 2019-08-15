const path = require("path");
const http = require("http");
const getHandler = require("./modules/getHandler")
const port = 3210;

const theServer = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  switch (req.method.toLowerCase()) {
    case 'get':
      new getHandler(req, res);
      break;
    default:
      res.end("Nincs ilyen kérés")

  }

})
theServer.listen(port, () => {
  "Server works"
})
