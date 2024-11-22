// controllers/tipoProyectoController.js
const TipoProyecto = require('../models/TipoProyecto');

// Listar todos los tipos de proyecto
exports.obtenerTiposProyecto = async (req, res) => {
  try {
    const tiposProyecto = await TipoProyecto.find();
    res.status(200).json(tiposProyecto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo tipo de proyecto
exports.crearTipoProyecto = async (req, res) => {
  try {
    const tipoProyecto = new TipoProyecto({
      nombre: req.body.nombre
    });
    await tipoProyecto.save();
    res.status(201).json(tipoProyecto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un tipo de proyecto existente
exports.actualizarTipoProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, req.body, { new: true });
    if (!tipoProyecto) {
      return res.status(404).json({ message: 'Tipo de proyecto no encontrado' });
    }
    tipoProyecto.fechaActualizacion = Date.now();
    await tipoProyecto.save();
    res.status(200).json(tipoProyecto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
