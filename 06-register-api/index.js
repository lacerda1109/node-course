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
app.post("/register-user", (req, res) => {
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

app.listen(8081, () => console.log("Server running..."));
