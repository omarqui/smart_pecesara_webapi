const express = require('express');
const router = express.Router();

const peceraController = require('../controllers/peceraController');
const ctrl = new peceraController();

router.get('/pecera',ctrl.getPecera);
router.post('/pecera',ctrl.savePeceraFromBody);

router.get('/pecera/:id/',ctrl.getPeceraById);
router.put('/pecera/:id/',ctrl.updatePecera);

module.exports = router;