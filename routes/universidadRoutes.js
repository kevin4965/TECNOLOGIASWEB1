const express = require('express');
const router = express.Router();
const universidadController = require('../controllers/universidadController');

// Ruta para listar todas las universidades
router.get('/', universidadController.obtenerUniversidades);

// Ruta para crear una nueva universidad
router.post('/', universidadController.crearUniversidad);

// Ruta para actualizar una universidad existente
router.put('/:id', universidadController.actualizarUniversidad);

module.exports = router;
