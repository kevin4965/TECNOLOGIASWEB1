const express = require('express');
const router = express.Router();
const etapaController = require('../controllers/etapaController');

// Ruta para listar todas las etapas
router.get('/', etapaController.obtenerEtapas);

// Ruta para crear una nueva etapa
router.post('/', etapaController.crearEtapa);

// Ruta para actualizar una etapa existente
router.put('/:id', etapaController.actualizarEtapa);

module.exports = router;
