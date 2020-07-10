// var mongoose = require('mongoose'),
//     configuracion = mongoose.model('Configuracion');
let data = require("../constants/caracteriscasPercera");

exports.getCaracteriscasPercera = function(req, res) {
//   configuracion.find({}, function(err, config) {
//     if (err)
//       res.send(err);
//     res.json(config);
//   });
    res.json(data);
};

exports.getCaracteriscasPerceraById = function(req, res) {
        let searched = {};
        data.forEach(carac => {
            if (carac._id == req.params.id) {
                searched = carac;
            }
        });

        res.json(searched);
    };

exports.getCaracteriscasPerceraByIdPecera = function(req, res) {
        let searched = [];

        data.forEach(carac => {
            if (carac.idPecera == req.params.id) {
                searched.push(carac);
            }
        });

        res.json(searched);
    };    

exports.updateCaracteriscasPercera = function(req, res) {
    let searched = {};
    data.forEach(carac => {
        if (carac._id == req.params.id) {
            searched = carac;
        }
    });    

    let newCaracteriscasPercera = req.body;

    searched.nombre = newCaracteriscasPercera.nombre;
    searched.dato = newCaracteriscasPercera.dato;    
    
    res.send("Caracterisca Percera actualizada");
};

exports.saveCaracteriscasPerceraFromBody = function(req, res) {    
    let newCaracteriscasPercera = req.body;

    const lastId = data[data.length-1]
    newCaracteriscasPercera._id = lastId._id + 1;    
    newCaracteriscasPercera.createdOn = new Date();
    data.push(newCaracteriscasPercera);
    
    res.send("CaracteriscasPercera guardada");   
};

