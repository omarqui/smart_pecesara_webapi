// var mongoose = require('mongoose'),
//     configuracion = mongoose.model('Configuracion');
let data = require("../constants/configuracion");

exports.getConfig = function(req, res) {
//   configuracion.find({}, function(err, config) {
//     if (err)
//       res.send(err);
//     res.json(config);
//   });
    res.json(data);
};

exports.updateConfig = function(req, res) {
    if (req.params.proximaFechaMantenimiento)
        data.proximaFechaMantenimiento = req.params.proximaFechaMantenimiento;
    if (req.params.horarioComida1)
        data.horarioComida1 = req.params.horarioComida1;
    if (req.params.horarioComida2)
        data.horarioComida2 = req.params.horarioComida2;
    
    res.send("Configuracion actualizada");
//     var new_task = new configuracion(req.body);        
//     new_task.save(function(err, task) {
//     if (err)
//       res.send(err);
    
//       res.json(task);
//   });
};

exports.updateFechaInterna = function(req, res) {
    if (req.params.fechaInternaReloj)
        data.fechaInternaReloj = req.params.fechaInternaReloj;    
    
    res.send("Fecha interna actualizada");
//     var new_task = new configuracion(req.body);        
//     new_task.save(function(err, task) {
//     if (err)
//       res.send(err);
    
//       res.json(task);
//   });
};


// exports.update_a_task = function(req, res) {
//   configuracion.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
