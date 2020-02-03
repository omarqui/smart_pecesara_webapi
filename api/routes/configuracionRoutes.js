module.exports = function(app) {
  let configuracion = require('../controllers/ConfiguracionController');

  // todoList Routes
  app.route('/configuracion')
    .get(configuracion.getConfig)
    .post(configuracion.updateConfig);
};