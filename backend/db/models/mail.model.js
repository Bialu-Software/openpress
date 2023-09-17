const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('email', {
    mailid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    timestamp: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
    },
  });
};
