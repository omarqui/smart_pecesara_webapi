// var mongoose = require('mongoose'),
//     configuracion = mongoose.model('Configuracion');
let data = require("../constants/sensoresLog");

exports.getSensoresLog = function(req, res) {
//   configuracion.find({}, function(err, config) {
//     if (err)
//       res.send(err);
//     res.json(config);
//   });
    res.json(data);
};

exports.getSensoresLogById = function(req, res) {
        let logSearched = {};
        data.forEach(log => {
            if (log._id == req.params.id) {
                logSearched = log;
            }
        });

        res.json(logSearched);
    };

exports.getSensoresLogActual = function(req, res) {
        let logSearched = data[data.length-1];        

        res.json(logSearched);
    };

// exports.updateSensoresLog = function(req, res) {
//     if (req.params.proximaFechaMantenimiento)
//         data.proximaFechaMantenimiento = req.params.proximaFechaMantenimiento;
//     if (req.params.horarioComida1)
//         data.horarioComida1 = req.params.horarioComida1;
//     if (req.params.horarioComida2)
//         data.horarioComida2 = req.params.horarioComida2;
    
//     res.send("Configuracion actualizada");
// //     var new_task = new configuracion(req.body);        
// //     new_task.save(function(err, task) {
// //     if (err)
// //       res.send(err);
    
// //       res.json(task);
// //   });
// };

exports.saveSensoresLogFromBody = function(req, res) {
    let configCtrl = require("./configuracionController");
    let newLog = req.body;

    // if (newLog.fechaInternaReloj)
    //     data.fechaInternaReloj = newLog.fechaInternaReloj;
    // if (newLog.proximaFechaMantenimiento)
    //     data.proximaFechaMantenimiento = newLog.proximaFechaMantenimiento;
    // if (newLog.horarioComida1)
    //     data.horarioComida1 = newLog.horarioComida1;
    // if (newLog.horarioComida2)
    //     data.horarioComida2 = newLog.horarioComida2;
    const lastLog = data[data.length-1]
    newLog._id = lastLog._id + 1;    
    newLog.createdOn = new Date();
    data.push(newLog);
    
    
    // res.send("Log sensores guardado");
    const { docificacionManual } = configCtrl.data;
    res.json({docificacionManual});
};

