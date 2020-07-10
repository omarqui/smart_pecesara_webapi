// var mongoose = require('mongoose'),
//     configuracion = mongoose.model('Configuracion');
let data = require("../constants/configuracion");
var _ = require('lodash');

exports.data = data;

exports.getConfig = function(req, res) {
//   configuracion.find({}, function(err, config) {
//     if (err)
//       res.send(err);
//     res.json(config);
//   });
    
    const idPecera = req.params.idPecera;    
    const newData = _.find(data,c=>c.idPecera==idPecera);
    
    res.json(newData ? newData.config : {});
};

//Pendiente por aqui
exports.updateConfigFromBody = function(req, res) {
    
    let newConfig = req.body;
    let actualData = _.find(data,c=>c.idPecera == newConfig.idPecera)

    if (actualData)
    {
        if (newConfig.fechaInternaReloj)
            actualData.config.fechaInternaReloj = newConfig.fechaInternaReloj;
        if (newConfig.proximaFechaMantenimiento)
            actualData.config.proximaFechaMantenimiento = newConfig.proximaFechaMantenimiento;
        if (newConfig.horarioComida1)
            actualData.config.horarioComida1 = newConfig.horarioComida1;
        if (newConfig.horarioComida2)
            actualData.config.horarioComida2 = newConfig.horarioComida2;
        if (newConfig.docificacionManual)
            actualData.config.docificacionManual = newConfig.docificacionManual;
        
        actualData.pendienteActualizar = 2;
    }
  
    res.json(actualData?actualData.config:{});
};

exports.getEstadoConfiguracion = function(req, res) {
    const idPecera = req.params.idPecera;
    let {pendienteActualizar} = _.find(data,c=>c.idPecera == idPecera);
    res.json({pendienteActualizar});
};

exports.getEstadoActuadores = function(req, res) {
    const idPecera = req.params.idPecera;
    let {estadoActuadores} = _.find(data,c=>c.idPecera == idPecera);
    res.json({estadoActuadores});
};


exports.updateEstadoConfiguracion = function(req, res) {    
    const idPecera = req.params.idPecera;
    let actualData = _.find(data,c=>c.idPecera == idPecera);
    actualData.pendienteActualizar = req.body.pendienteActualizar;
    let {pendienteActualizar} = actualData;    
    res.json({pendienteActualizar});
};

exports.updateEstadoActuadores = function(req, res) {     
    const idPecera = req.params.idPecera;
    let actualData = _.find(data,c=>c.idPecera == idPecera); 
    actualData.estadoActuadores = req.body.estadoActuadores;
    
    res.json({estadoActuadores : actualData.estadoActuadores});
};

exports.updateFechaInterna = function(req, res) {
    const idPecera = req.params.idPecera;
    let actualData = _.find(data,c=>c.idPecera == idPecera); 

    if (req.params.fechaInternaReloj)
        actualData.config.fechaInternaReloj = req.params.fechaInternaReloj;    
    
    res.json(actualData.config);
};