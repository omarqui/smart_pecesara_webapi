module.exports = function(app) {
  let sesoresController = require('../controllers/sensoresLogController');

  app.route('/sensores')
    .get(sesoresController.getSensoresLog)
    .post(sesoresController.saveSensoresLogFromBody);
      
  app.route('/sensores/actual')    
    .get(sesoresController.getSensoresLogActual);
  
  app.route('/sensores/:id')    
    .get(sesoresController.getSensoresLogById);
};