const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Project root!");
});

app.get("/about", function (req, res) {
  res.send("My about page");
});

app.listen(8081, function () {
  console.log("Server running...");
});
