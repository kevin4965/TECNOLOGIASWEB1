const Etapa = require('../models/Etapa');

// Listar todas las etapas
exports.obtenerEtapas = async (req, res) => {
  try {
    const etapas = await Etapa.find();
    res.status(200).json(etapas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva etapa
exports.crearEtapa = async (req, res) => {
  try {
    const etapa = new Etapa({
      nombre: req.body.nombre,
      fechaCreacion: Date.now(),
      fechaActualizacion: Date.now()
    });
    await etapa.save();
    res.status(201).json(etapa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Editar una etapa existente
exports.actualizarEtapa = async (req, res) => {
  try {
    const { id } = req.params;
    const etapa = await Etapa.findByIdAndUpdate(
      id,
      {
        ...req.body,
        fechaActualizacion: Date.now()
      },
      { new: true }
    );

    if (!etapa) {
      return res.status(404).json({ message: 'Etapa no encontrada' });
    }

    res.status(200).json(etapa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
