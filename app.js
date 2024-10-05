// app.js
const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const empresaRoutes = require('./routes/empresaRoutes');
const sucursalRoutes = require('./routes/sucursalRoutes');
const sequelize = require('./config/database');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.use('/empresas', empresaRoutes);
app.use('/sucursales', sucursalRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Configurar EJS
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');