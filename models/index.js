// models/index.js
const sequelize = require('../config/database');
const Empresa = require('./empresa');
const Sucursal = require('./sucursal');

// Sincronizar modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos:', error);
  });

module.exports = {
  Empresa,
  Sucursal,
};
