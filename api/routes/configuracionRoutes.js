module.exports = function(app) {
  let configuracion = require('../controllers/configuracionController');

  app.route('/configuracion')
    .get(configuracion.getConfig)
    .post(configuracion.updateConfigFromBody);

  app.route('/configuracion/estado')
    .get(configuracion.getEstadoConfiguracion)
    .post(configuracion.updateEstadoConfiguracion);    

  app.route('/configuracion/:proximaFechaMantenimiento/:horarioComida1/:horarioComida2')    
    .post(configuracion.updateConfig);
  
  app.route('/configuracion/:fechaInternaReloj')    
    .post(configuracion.updateFechaInterna);
};