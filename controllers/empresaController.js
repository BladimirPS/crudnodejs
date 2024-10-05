// controllers/empresaController.js
const { Empresa } = require('../models');

// controllers/empresaController.js

exports.listarEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.render('empresas/index', {
      title: 'Lista de Empresas',
      empresas: empresas
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.mostrarFormularioCrear = (req, res) => {
  res.render('empresas/create');
};

exports.crearEmpresa = async (req, res) => {
  try {
    await Empresa.create(req.body);
    res.redirect('/empresas');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.mostrarEmpresa = async (req, res) => {
  try {
    const id = req.params.id;
    console.log('ID recibido:', id);

    const empresa = await Empresa.findByPk(id);
    console.log('Empresa encontrada:', empresa);

    if (!empresa) {
      // Si no se encuentra la empresa, renderiza una página de error o muestra un mensaje
      return res.status(404).render('404', { message: 'Empresa no encontrada' });
    }

    res.render('empresas/show', {
      title: 'Detalles de la Empresa',
      empresa: empresa
    });
  } catch (error) {
    console.error('Error al obtener la empresa:', error);
    res.status(500).send(error.message);
  }
};

exports.mostrarFormularioEditar = async (req, res) => {
  try {
    const empresa = await Empresa.findByPk(req.params.id);
    res.render('empresas/edit', { empresa });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.actualizarEmpresa = async (req, res) => {
  try {
    await Empresa.update(req.body, { where: { idEmpresa: req.params.id } });
    res.redirect('/empresas');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.eliminarEmpresa = async (req, res) => {
  try {
    await Empresa.destroy({ where: { idEmpresa: req.params.id } });
    res.redirect('/empresas');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
