// Express
const express = require("express");
const app = express();

// Database connection
const Sequelize = require("sequelize");
const sequelize = new Sequelize("sequelize_test", "root", "root30gab", {
  host: "localhost",
  dialect: "mysql",
});

// Body-parser config
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Root route!");
});

app.post("/create-user", (req, res) => {
  res.send(req.body);
});

app.listen(8081, () => console.log("Server running..."));
