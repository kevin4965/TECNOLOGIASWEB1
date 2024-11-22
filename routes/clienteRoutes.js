const express = require('express');
const { obtenerClientes, crearCliente, actualizarCliente } = require('../controllers/clienteController');
const router = express.Router();

// Ruta para listar clientes
router.get('/', obtenerClientes);

// Ruta para crear un nuevo cliente
router.post('/', crearCliente);

// Ruta para actualizar un cliente existente
router.put('/:id', actualizarCliente);

module.exports = router;
