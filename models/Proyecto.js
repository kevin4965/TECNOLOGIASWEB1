const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
  numero: { 
    type: Number, 
    unique: true, 
    required: true 
  },
  titulo: { 
    type: String, 
    required: true 
  },
  fechaIniciacion: { 
    type: Date, 
    required: true 
  },
  fechaEntrega: { 
    type: Date 
  },
  valor: { 
    type: Number, 
    required: true 
  },
  fechaCreacion: { 
    type: Date, 
    default: Date.now 
  },
  fechaActualizacion: { 
    type: Date, 
    default: Date.now 
  },
  cliente: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Cliente', 
    required: true 
  },
  tipoProyecto: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'TipoProyecto', 
    required: true 
  },
  universidad: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Universidad', 
    required: true 
  },
  etapa: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Etapa', 
    required: true 
  }
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);
