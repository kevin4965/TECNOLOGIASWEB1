const Proyecto = require('../models/Proyecto');

// Listar todos los proyectos
exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find()
      .populate('cliente', 'nombre')
      .populate('tipoProyecto', 'nombre')
      .populate('universidad', 'nombre')
      .populate('etapa', 'nombre');
    res.status(200).json(proyectos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo proyecto
exports.crearProyecto = async (req, res) => {
  try {
    const proyecto = new Proyecto({
      numero: req.body.numero,
      titulo: req.body.titulo,
      fechaIniciacion: req.body.fechaIniciacion,
      fechaEntrega: req.body.fechaEntrega,
      valor: req.body.valor,
      cliente: req.body.cliente,
      tipoProyecto: req.body.tipoProyecto,
      universidad: req.body.universidad,
      etapa: req.body.etapa,
      fechaCreacion: Date.now(),
      fechaActualizacion: Date.now()
    });
    await proyecto.save();
    res.status(201).json(proyecto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Editar un proyecto existente
exports.actualizarProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findByIdAndUpdate(
      id,
      {
        ...req.body,
        fechaActualizacion: Date.now()
      },
      { new: true }
    ).populate('cliente tipoProyecto universidad etapa');

    if (!proyecto) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    res.status(200).json(proyecto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
