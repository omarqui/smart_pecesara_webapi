const moment = require('moment');
const dbService = require("../models/pecera");

const $project = {
    _id: 0,
    _id: "$idManual",
    nombre: 1,
    createOn: 1
};

class PeceraController {
    async getPecera(req, res) {
        const list = await dbService.aggregate([{$project}]);
        
        const listConvert = list.map(pecera=>{
            let newPec = Object.assign({}, pecera);
            newPec.createOn = moment.utc(pecera.createOn).local().format();
            return newPec;
        });

        res.json(listConvert);
    }

    async getPeceraById(req, res) {
        const searched = await dbService.aggregate([{
            $match: { "idManual": req.params.id }
        },{$project}]);
        
        res.json(searched);
    }

    async updatePecera(req, res) {
        await dbService.findOneAndUpdate({ idManual: req.params.id}, { nombre: req.body.nombre });

        res.send({});
    }

    async savePeceraFromBody(req, res) {
        let newPecera = req.body;
        
        if (newPecera.hasOwnProperty("_id")) newPecera._id = undefined;
        if (newPecera.hasOwnProperty("createOn")) newPecera.createOn = undefined;

        const data = await dbService.find();
        if (data.length > 0) {
            const lastId = data[data.length - 1]
            newPecera.idManual = lastId.idManual ? Number(lastId.idManual) + 1 : 1;
        } else {
            newPecera.idManual = 1
        }

        const pecera = new dbService(newPecera);
        await pecera.save();

        const newConfig = {
            idPecera: pecera.idManual,
            fechaInternaReloj: moment().format("DD-MM-YYYYTHH:mm"),
            proximaFechaMantenimiento: moment().format("DD-MM-YYYY"),
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