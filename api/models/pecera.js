var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PeceraSchema = new Schema({
  idManual: {
    type: String,
  }, 
  nombre: {
    type: String,
  }
});

module.exports = mongoose.model('Pecera', PeceraSchema);