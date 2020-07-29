const express = require('express');
const router = express.Router();
const basicAuth = require('../middlerwares/basicAuth');
const extrasController = require('../controllers/extrasFuctionsController');

router.route('/reset')
  .get(basicAuth.Authenticator,extrasController.resetDB);  

module.exports = router;