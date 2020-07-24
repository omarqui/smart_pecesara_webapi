const moment = require('moment');
let dbService;

class PeceraController {
    constructor(service){
        if(service)
            dbService = service;
        else
            dbService = require("../models/pecera");        
    }

    async getPecera(req, res) {
        const list = await dbService.find();
        res.json(list);
    }

    async getPeceraById(req, res) {
        const searched = await dbService.findById(req.params.id)

        res.json(searched);
    }

    async updatePecera(req, res) {
        await dbService.findByIdAndUpdate(req.params.id, { nombre: req.body.nombre });

        res.send({});
    }

    async savePeceraFromBody (req, res) {
        let newPecera = req.body;
        
        const data = await dbService.find();
        if (data.length > 0){
            const lastId = data[data.length - 1]
            newPecera.idManual = lastId.idManual ? lastId.idManual + 1 : 1;
        } else {
            newPecera.idManual = 1 
        }
        
        const pecera = new dbService(newPecera);
        await pecera.save();

        const newConfig = {            
            idPecera: pecera._id,
            fechaInternaReloj: moment().format(),
            proximaFechaMantenimiento: moment().format("YYYY-MM-DD"),
            horarioComida1: moment().format("HH:mm"),
            horarioComida2: moment().add(1, "hour").format("HH:mm"),
            docificacionManual: 0,
            pendienteActualizar: 1,
            estadoActuadores: 0
        };

        const configModel = require("../models/configuracion");
        const config = new configModel(newConfig);
        config.save();

        res.send({});
    }
}

module.exports = PeceraController;