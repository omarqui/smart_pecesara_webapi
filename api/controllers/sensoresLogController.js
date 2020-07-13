// var mongoose = require('mongoose'),
//     configuracion = mongoose.model('Configuracion');
let data = require("../constants/sensoresLog");
var _ = require('lodash');

exports.getSensoresLog = function(req, res) {
    const idPecera = req.params.idPecera;
    const newData = _.filter(data,s=>s.idPecera==idPecera);
//   configuracion.find({}, function(err, config) {
//     if (err)
//       res.send(err);
//     res.json(config);
//   });
    res.json(newData);
};

exports.getSensoresLogById = function(req, res) {
        let logSearched = {};
        logSearched = _.find(data,l=>l._id == req.params.id);
        // data.forEach(log => {
        //     if (log._id == req.params.id) {
        //         logSearched = log;
        //     }
        // });

        res.json(logSearched);
    };

exports.getSensoresLogActual = function(req, res) {
        const idPecera = req.params.idPecera;
        const filteredData = _.filter(data,s=>s.idPecera==idPecera)
        if (filteredData.length <= 0) {
            res.statusCode = 404;
            res.json({});   
        }
        let logSearched = filteredData[filteredData.length-1];        
        
        res.json(logSearched);
    };

exports.saveSensoresLogFromBody = function(req, res) {
    let configCtrl = require("./configuracionController");
    let newLog = req.body;
    
    const lastLog = data[data.length-1]
    newLog._id = lastLog._id + 1;    
    newLog.createdOn = new Date();
    console.log(newLog);
    
    data.push(newLog);
    console.log(data);
    
    const configPecera = _.find(configCtrl.data, c=>c.idPecera == newLog.idPecera);
    const { docificacionManual } = configPecera.config;
    const { pendienteActualizar, estadoActuadores } = configPecera;
    
    console.log(data);
    res.json({docificacionManual, pendienteActualizar, estadoActuadores});
};

