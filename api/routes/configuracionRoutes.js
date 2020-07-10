module.exports = function(app) {
  let configuracion = require('../controllers/configuracionController');

  app.route('/configuracion/:idPecera')
    .get(configuracion.getConfig);

  app.route('/configuracion')
    .post(configuracion.updateConfigFromBody);

  app.route('/configuracion/estado/:idPecera')
    .get(configuracion.getEstadoConfiguracion)
    .post(configuracion.updateEstadoConfiguracion);   
    
  app.route('/configuracion/actuadores/:idPecera')
    .get(configuracion.getEstadoActuadores)
    .post(configuracion.updateEstadoActuadores);   
      
};