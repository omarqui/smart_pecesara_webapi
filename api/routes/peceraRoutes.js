module.exports = function(app) {
  let peceraController = require('../controllers/peceraController');

  app.route('/pecera')
    .get(peceraController.getPecera)
    .post(peceraController.savePeceraFromBody);
  
  app.route('/pecera/:id/')    
    .get(peceraController.getPeceraById)
    .put(peceraController.updatePecera);
};