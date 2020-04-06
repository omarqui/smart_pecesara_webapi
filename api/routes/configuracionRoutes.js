module.exports = function(app) {
  let configuracion = require('../controllers/configuracionController');

  // todoList Routes
  app.route('/configuracion')
    .get(configuracion.getConfig)
    .post(configuracion.updateConfigFromBody);
      
  app.route('/configuracion/:proximaFechaMantenimiento/:horarioComida1/:horarioComida2')    
    .post(configuracion.updateConfig);
  
  app.route('/configuracion/:fechaInternaReloj')    
    .post(configuracion.updateFechaInterna);
};