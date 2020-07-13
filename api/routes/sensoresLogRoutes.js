module.exports = function(app) {
  let sesoresController = require('../controllers/sensoresLogController');

  app.route('/sensores/:idPecera')
    .get(sesoresController.getSensoresLog);
    
  app.route('/sensores')  
    .post(sesoresController.saveSensoresLogFromBody);
      
  app.route('/sensores/actual/:idPecera')    
    .get(sesoresController.getSensoresLogActual);
  
  app.route('/sensores/detalle/:id')    
    .get(sesoresController.getSensoresLogById);
};