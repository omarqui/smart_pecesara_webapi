// var mongoose = require('mongoose'),
//     configuracion = mongoose.model('Configuracion');
let data = require("../constants/configuracion");

exports.data = data;

exports.getConfig = function(req, res) {
//   configuracion.find({}, function(err, config) {
//     if (err)
//       res.send(err);
//     res.json(config);
//   });
    res.json(data.config);
};

exports.updateConfigFromBody = function(req, res) {
    let newConfig = req.body;

    if (newConfig.fechaInternaReloj)
        data.config.fechaInternaReloj = newConfig.fechaInternaReloj;
    if (newConfig.proximaFechaMantenimiento)
        data.config.proximaFechaMantenimiento = newConfig.proximaFechaMantenimiento;
    if (newConfig.horarioComida1)
        data.config.horarioComida1 = newConfig.horarioComida1;
    if (newConfig.horarioComida2)
        data.config.horarioComida2 = newConfig.horarioComida2;
    if (newConfig.docificacionManual)
        data.config.docificacionManual = newConfig.docificacionManual;

    data.pendienteActualizar = 1;
    res.json(data.config);
};

exports.getEstadoConfiguracion = function(req, res) {
    let {pendienteActualizar} = data;
    res.json({pendienteActualizar});
};

exports.updateEstadoConfiguracion = function(req, res) {    
    let {pendienteActualizar} = data;
    data.pendienteActualizar = req.body.pendienteActualizar;
    
    res.json({pendienteActualizar});
};

exports.updateFechaInterna = function(req, res) {
    if (req.params.fechaInternaReloj)
        data.config.fechaInternaReloj = req.params.fechaInternaReloj;    
    
    res.json(data.config);
};