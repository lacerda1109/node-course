// Express
const express = require("express");
const app = express();

// Body-parser config
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Models
const User = require("./models/User");

// Routes
app.get("/user", (req, res) => {
  User.findAll({
    order: [["createdAt", "DESC"]],
  }).then((response) => res.send(response));
});

app.get("/user/:id", (req, res) => {
  User.findAll({
    where: {
      id: req.params.id,
    },
  }).then((response) => res.send(response));
});

app.post("/user", (req, res) => {
  const body = req.body;

  User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    age: body.age,
    email: body.email,
  })
    .then(() => res.send("Success!"))
    .catch((err) => res.send(`Error: ${err}`));
});

app.put("/user/:id", (req, res) => {
  const body = req.body;
  User.update(
    {
      firstName: body.firstName,
      lastName: body.lastName,
      age: body.age,
      email: body.email,
    },
    { where: { id: req.params.id } }
  )
    .then(() => res.send("Success!"))
    .catch((err) => res.send(`Error: ${err}`));
});

app.delete("/user/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.send("Success!"))
    .catch((err) => res.send(`Error: ${err}`));
});

app.listen(8081, () => console.log("Server running..."));
