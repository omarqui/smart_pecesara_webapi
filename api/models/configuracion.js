var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ConfiguracionSchema = new Schema({
  idPecera: {
    type: String
  },
  fechaInternaReloj: {
    type: String,
    default: Date.now
  },
  proximaFechaMantenimiento: {
    type: String
  },
  horarioComida1: {
    type: String
  },
  horarioComida2: {
    type: String
  },
  docificacionManual: {
    type: Number
  },
  pendienteActualizar: {
    type: Number
  },
  estadoActuadores: {
    type: Number
  }
});

module.exports = mongoose.model('Configuracion', ConfiguracionSchema);