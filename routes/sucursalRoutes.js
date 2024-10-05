// routes/sucursalRoutes.js
const express = require('express');
const router = express.Router();
const sucursalController = require('../controllers/sucursalController');

// Listar sucursales
router.get('/', sucursalController.listarSucursales);

// Mostrar formulario para crear sucursal
router.get('/create', sucursalController.mostrarFormularioCrear);

// Crear sucursal
router.post('/', sucursalController.crearSucursal);

// Mostrar detalles de una sucursal
router.get('/:id', sucursalController.mostrarSucursal);

// Mostrar formulario para editar sucursal
router.get('/:id/edit', sucursalController.mostrarFormularioEditar);

// Actualizar sucursal
router.put('/:id', sucursalController.actualizarSucursal);

// Eliminar sucursal
router.delete('/:id', sucursalController.eliminarSucursal);

module.exports = router;
