const express = require('express');
const router = express.Router();

const extrasController = require('../controllers/extrasFuctionsController');

router.route('/reset')
  .get(extrasController.resetDB);  

module.exports = router;