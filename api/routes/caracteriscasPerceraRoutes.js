module.exports = function(app) {
  let caracteriscasPerceraController = require('../controllers/caracteriscasPerceraController');

  app.route('/caracteriscasPercera')
    .get(caracteriscasPerceraController.getCaracteriscasPercera)
    .post(caracteriscasPerceraController.saveCaracteriscasPerceraFromBody);
  
  app.route('/caracteriscasPercera/:id')
    .put(caracteriscasPerceraController.updateCaracteriscasPercera)
    .get(caracteriscasPerceraController.getCaracteriscasPerceraById);

  app.route('/caracteriscasPercera/fromPecera/:id')
    .get(caracteriscasPerceraController.getCaracteriscasPerceraByIdPecera);
};