const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Nothing here.");
});

app.get("/about", function (req, res) {
  res.send("My about page.");
});

app.get("/show-param/:param", function (req, res) {
  res.send(`O valor enviado por parâmetro foi: ${req.params.param}`);
});

app.listen(8081, function () {
  console.log("Server running...");
});
