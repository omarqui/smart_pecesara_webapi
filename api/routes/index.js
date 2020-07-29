const express = require("express");
const router = express.Router();

router.use(require('./configuracionRoutes'));
router.use(require('./sensoresLogRoutes'));
router.use(require('./peceraRoutes'));
router.use(require('./caracteriscasPerceraRoutes'));
router.use(require('./extrasFuctionsRoutes'));

module.exports = router;