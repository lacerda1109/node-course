const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "sequelize_test", // Nome do banco
  "root", // Usuário
  "root30gab", // Senha
  {
    host: "localhost", // O compudator a ser acessado
    dialect: "mysql", // O tipo de banco de dados
  }
);

// Criando um Model (modelo)
const User = sequelize.define("users", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

// User.sync({ force: true });

// User.create({
//   firstName: "Gabriel",
//   lastName: "Lacerda",
//   age: 24,
//   email: "lacerda@mysql.com",
// });

// sequelize
//   .authenticate() // Método para testar a conexão
//   .then(function () {
//     console.log("Connected");
//   })
//   .catch(function (err) {
//     console.log("Connection failed: " + err);
//   });
