// controllers/sucursalController.js
const { Sucursal, Empresa } = require('../models');

// controllers/sucursalController.js
exports.listarSucursales = async (req, res) => {
  try {
    const sucursales = await Sucursal.findAll();
    res.render('sucursales/index', {
      title: 'Lista de Sucursales',
      sucursales: sucursales
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.mostrarFormularioCrear = async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.render('sucursales/create', { empresas });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.crearSucursal = async (req, res) => {
  try {
    await Sucursal.create(req.body);
    res.redirect('/sucursales');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// controllers/sucursalController.js
exports.mostrarSucursal = async (req, res) => {
  try {
    const id = req.params.id;
    const sucursal = await Sucursal.findByPk(id);

    if (!sucursal) {
      return res.status(404).render('404', { message: 'Sucursal no encontrada' });
    }

    res.render('sucursales/show', {
      title: 'Detalles de la Sucursal',
      sucursal: sucursal
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


// controllers/sucursalController.js

exports.mostrarFormularioEditar = async (req, res) => {
  try {
    const id = req.params.id;
    const sucursal = await Sucursal.findByPk(id);

    if (!sucursal) {
      return res.status(404).render('404', { message: 'Sucursal no encontrada' });
    }

    const empresas = await Empresa.findAll();

    res.render('sucursales/edit', {
      title: 'Editar Sucursal',
      sucursal: sucursal,
      empresas: empresas
    });
  } catch (error) {
    console.error('Error al mostrar el formulario de edición:', error);
    res.status(500).send(error.message);
  }
};


exports.actualizarSucursal = async (req, res) => {
  try {
    await Sucursal.update(req.body, { where: { idSucursal: req.params.id } });
    res.redirect('/sucursales');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.eliminarSucursal = async (req, res) => {
  try {
    await Sucursal.destroy({ where: { idSucursal: req.params.id } });
    res.redirect('/sucursales');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
