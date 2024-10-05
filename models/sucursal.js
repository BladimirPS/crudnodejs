// models/sucursal.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Empresa = require('./empresa');

const Sucursal = sequelize.define('inv_sucursales', {
  idsucursal: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  idempresa: {
    type: DataTypes.STRING(5),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccion: DataTypes.STRING(100),
  telefono: DataTypes.STRING(50),
  encargado: DataTypes.STRING(50),
  estado: {
    type: DataTypes.STRING(3),
    validate: {
      isIn: [['A', 'I', 'PEN', 'DES', 'CAN']],
    },
  },
}, {
  timestamps: false,
});

// Definir la relación
Sucursal.belongsTo(Empresa, { foreignKey: 'idempresa' });
Empresa.hasMany(Sucursal, { foreignKey: 'idempresa' });

module.exports = Sucursal;
