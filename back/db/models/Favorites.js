const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./User");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    Poster: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Year: {
      type: Sequelize.STRING,
      allowNull: false
    },
    imdbID: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "favorites" }
);

Favorites.belongsTo(User, { as: "user" }); // agrega a Favorites un UserID

module.exports = Favorites;
