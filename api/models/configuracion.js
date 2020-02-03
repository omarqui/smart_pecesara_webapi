var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ConfiguracionSchema = new Schema({
  fechaInternaReloj: {
    type: Date,
    default: Date.now,
    required: "Fecha requirida"
  },
  proximaFechaMantenimiento: {
    type: Date
  },
  horarioComida1: {
    type: Date
  },
  horarioComida2: {
    type: Date
  }
});

module.exports = mongoose.model('Configuracion', ConfiguracionSchema);