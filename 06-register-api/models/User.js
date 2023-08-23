const db = require("./db");

const User = db.sequelize.define("users", {
  firstName: {
    type: db.Sequelize.STRING,
  },
  lastName: {
    type: db.Sequelize.STRING,
  },
  age: {
    type: db.Sequelize.INTEGER,
  },
  email: {
    type: db.Sequelize.STRING,
  },
});

module.exports = User;
