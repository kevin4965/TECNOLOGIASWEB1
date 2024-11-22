// routes/tipoProyectoRoutes.js
const express = require('express');
const router = express.Router();
const tipoProyectoController = require('../controllers/tipoProyectoController');

// Ruta para listar todos los tipos de proyecto
router.get('/', tipoProyectoController.obtenerTiposProyecto);

// Ruta para crear un nuevo tipo de proyecto
router.post('/', tipoProyectoController.crearTipoProyecto);

// Ruta para actualizar un tipo de proyecto existente
router.put('/:id', tipoProyectoController.actualizarTipoProyecto);

module.exports = router;

