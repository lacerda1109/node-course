const Sequelize = require("sequelize");

const sequelize = new Sequelize("register_app", "root", "root30gab", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { Sequelize, sequelize };
