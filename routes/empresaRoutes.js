// routes/empresaRoutes.js
const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

// Listar empresas
router.get('/', empresaController.listarEmpresas);

// Mostrar formulario para crear empresa
router.get('/create', empresaController.mostrarFormularioCrear);

// Crear empresa
router.post('/', empresaController.crearEmpresa);

// Mostrar detalles de una empresa
router.get('/:id', empresaController.mostrarEmpresa);

// Mostrar formulario para editar empresa
router.get('/:id/edit', empresaController.mostrarFormularioEditar);

// Actualizar empresa
router.put('/:id', empresaController.actualizarEmpresa);

// Eliminar empresa
router.delete('/:id', empresaController.eliminarEmpresa);

module.exports = router;
