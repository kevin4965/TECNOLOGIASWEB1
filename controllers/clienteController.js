const Cliente = require('../models/Cliente');

// Listar todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    const cliente = new Cliente({
      nombre: req.body.nombre,
      email: req.body.email
    });
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Editar un cliente existente
exports.actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    cliente.fechaActualizacion = Date.now();
    await cliente.save();
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

