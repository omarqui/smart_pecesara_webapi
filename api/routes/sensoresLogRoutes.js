const express = require('express');
const router = express.Router();

let sesoresController = require('../controllers/sensoresLogController');

router.route('/sensores/:idPecera')
  .get(sesoresController.getSensoresLog);
  
router.route('/sensores')  
  .post(sesoresController.saveSensoresLogFromBody);
    
router.route('/sensores/actual/:idPecera')    
  .get(sesoresController.getSensoresLogActual);

router.route('/sensores/detalle/:id')    
  .get(sesoresController.getSensoresLogById);

router.route('/sensores/:idPecera/:desde/:hasta/:horaInicio/:horaFin')    
  .get(sesoresController.getSensoresLogBetweenDates);
  
module.exports = router;