// var mongoose = require('mongoose'),
//     configuracion = mongoose.model('Configuracion');
let data = require("../constants/pecera");
let moment = require("moment");

exports.getPecera = function(req, res) {
//   configuracion.find({}, function(err, config) {
//     if (err)
//       res.send(err);
//     res.json(config);
//   });
    res.json(data);
};

exports.getPeceraById = function(req, res) {
        let searched = {};
        data.forEach(pec => {
            if (pec._id == req.params.id) {
                searched = pec;
            }
        });

        res.json(searched);
    };


exports.updatePecera = function(req, res) {
    let searched = {};
    data.forEach(pec => {
        if (pec._id == req.params.id) {
            searched = pec;
        }
    });
    searched.nombre = req.params.nombre;
    
    res.send("Pecera actualizada");
};

exports.savePeceraFromBody = function(req, res) {    
    let newPecera = req.body;

    const lastId = data[data.length-1]
    newPecera._id = lastId._id + 1;    
    newPecera.createdOn = new Date();

    data.push(newPecera);
   
    actualData = {
        idPecera: newPecera._id,
        config:{
            fechaInternaReloj: moment().format(),
            proximaFechaMantenimiento: moment().format("YYYY-MM-DD"), 
            horarioComida1: moment().format("HH:mm"),
            horarioComida2: moment().add(1,"hour").format("HH:mm"),
            docificacionManual: 0,
        },   
        pendienteActualizar: 1,
        estadoActuadores: 0
    }; 
    
    let configCtrl = require("./configuracionController");
    configCtrl.data.push(actualData);

    res.send("Pecera guardada");   
};

