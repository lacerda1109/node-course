let http = require("http");

http
  .createServer(function (req, res) { // Abre um servidor HTTP
    res.end("Hello World!");
  })
  .listen(8081); // Informa em qual porta de rede queremos que o servidor seja aberto

console.log("Server running...");
