// var mongoose = require('mongoose'),
//     configuracion = mongoose.model('Configuracion');
let data = require("../constants/configuracion");
let pendienteActualizar = 0;

exports.data = data;

exports.getConfig = function(req, res) {
//   configuracion.find({}, function(err, config) {
//     if (err)
//       res.send(err);
//     res.json(config);
//   });
    res.json(data);
};

exports.updateConfigFromBody = function(req, res) {
    let newConfig = req.body;

    if (newConfig.fechaInternaReloj)
        data.fechaInternaReloj = newConfig.fechaInternaReloj;
    if (newConfig.proximaFechaMantenimiento)
        data.proximaFechaMantenimiento = newConfig.proximaFechaMantenimiento;
    if (newConfig.horarioComida1)
        data.horarioComida1 = newConfig.horarioComida1;
    if (newConfig.horarioComida2)
        data.horarioComida2 = newConfig.horarioComida2;
    if (newConfig.docificacionManual)
        data.docificacionManual = newConfig.docificacionManual;

    pendienteActualizar = 1;
    res.json(data);
};

exports.getEstadoConfiguracion = function(req, res) {
    res.json({pendienteActualizar});
};

exports.updateEstadoConfiguracion = function(req, res) {    
    pendienteActualizar = req.body.pendienteActualizar;
    
    res.json({pendienteActualizar});
};

exports.updateFechaInterna = function(req, res) {
    if (req.params.fechaInternaReloj)
        data.fechaInternaReloj = req.params.fechaInternaReloj;    
    
    res.json(data);
};