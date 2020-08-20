var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SensoresLogSchema = new Schema({
  idPecera: {
    type: String
  },
  createOn: {
    type: Date,    
  },
  creadoEl: {
    type: Date,    
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