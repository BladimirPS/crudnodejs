// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('empresa-db', 'postgres', '1525', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
