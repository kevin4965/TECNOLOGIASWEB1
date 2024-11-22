const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

// Ruta para listar todos los proyectos
router.get('/', proyectoController.obtenerProyectos);

// Ruta para crear un nuevo proyecto
router.post('/', proyectoController.crearProyecto);

// Ruta para actualizar un proyecto existente
router.put('/:id', proyectoController.actualizarProyecto);

module.exports = router;
