var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SensoresLogSchema = new Schema({
  createOn: {
    type: Date,
    default: Date.now,
    required: "Fecha requirida"
  },
  nivel: {
    type: String
  },
  temperatura: {
    type: String
  },
  PH: {
    type: String
  },
  GH: {
    type: String
  }
});

module.exports = mongoose.model('SensoresLog', SensoresLogSchema);