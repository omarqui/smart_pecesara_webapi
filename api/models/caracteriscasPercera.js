var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CaracteriscasPerceraSchema = new Schema({
  idPecera: {
    type: String,
  },
  nombre: {
    type: String,
  },
  dato: {
    type: String,
  }
});

module.exports = mongoose.model('CaracteriscasPercera', CaracteriscasPerceraSchema);