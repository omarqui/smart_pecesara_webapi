var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PeceraSchema = new Schema({
  idManual: {
    type: String,
  }, 
  nombre: {
    type: String,
  },
  createOn: {
    type: Date,
    default: Date.now,
    required: "Fecha requirida"
  }
});

module.exports = mongoose.model('Pecera', PeceraSchema);