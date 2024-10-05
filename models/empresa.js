// models/empresa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empresa = sequelize.define('gen_empresas', {
  idempresa: {
    type: DataTypes.STRING(5),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  direccionfacturacion: DataTypes.STRING(200),
  representantelegal: DataTypes.STRING(100),
  telefono: DataTypes.STRING(50),
  correoelectronico: DataTypes.STRING(100),
  codigopostal: DataTypes.STRING(20),
  estado: {
    type: DataTypes.STRING(3),
    validate: {
      isIn: [['A', 'I', 'PEN', 'DES', 'CAN']],
    },
  },
  principal: {
    type: DataTypes.STRING(1),
    validate: {
      isIn: [['S', 'N']],
    },
  },
  adiciono: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  fechaadicion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

module.exports = Empresa;
