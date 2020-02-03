module.exports = function(app) {
  let configuracion = require('../controllers/configuracionController');

  // todoList Routes
  app.route('/configuracion')
    .get(configuracion.getConfig)
    .post(configuracion.updateConfig);
};