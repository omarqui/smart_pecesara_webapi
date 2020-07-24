const express = require('express');
const router = express.Router();

let configuracion = require('../controllers/configuracionController');

router.route('/configuracion/:idPecera')
    .get(configuracion.getConfig);

router.route('/configuracion')
    .post(configuracion.updateConfigFromBody);

router.route('/configuracion/estado/:idPecera')
    .get(configuracion.getEstadoConfiguracion)
    .post(configuracion.updateEstadoConfiguracion);   
    
router.route('/configuracion/actuadores/:idPecera')
    .get(configuracion.getEstadoActuadores)
    .post(configuracion.updateEstadoActuadores);   

module.exports = router;