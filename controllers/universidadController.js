const Universidad = require('../models/Universidad');

// Listar todas las universidades
exports.obtenerUniversidades = async (req, res) => {
  try {
    const universidades = await Universidad.find();
    res.status(200).json(universidades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva universidad
exports.crearUniversidad = async (req, res) => {
  try {
    const universidad = new Universidad({
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      fechaCreacion: Date.now(),
      fechaActualizacion: Date.now()
    });
    await universidad.save();
    res.status(201).json(universidad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Editar una universidad existente
exports.actualizarUniversidad = async (req, res) => {
  try {
    const { id } = req.params;
    const universidad = await Universidad.findByIdAndUpdate(
      id,
      {
        ...req.body,
        fechaActualizacion: Date.now()
      },
      { new: true }
    );
    
    if (!universidad) {
      return res.status(404).json({ message: 'Universidad no encontrada' });
    }

    res.status(200).json(universidad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
