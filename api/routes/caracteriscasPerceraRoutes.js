const express = require('express');
const router = express.Router();

const caracteriscasPerceraController = require('../controllers/caracteriscasPerceraController');
const ctrl = new caracteriscasPerceraController();

router.route('/caracteriscasPercera')
  .get(ctrl.getCaracteriscasPercera)
  .post(ctrl.saveCaracteriscasPerceraFromBody);

router.route('/caracteriscasPercera/:id')
  .put(ctrl.updateCaracteriscasPercera)
  .get(ctrl.getCaracteriscasPerceraById);

router.route('/caracteriscasPercera/fromPecera/:id')
  .get(ctrl.getCaracteriscasPerceraByIdPecera);

module.exports = router;