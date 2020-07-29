const _ = require("lodash");
const SensoresLogModel = require('../models/sensoresLogSensores');
const sensoresLogSensores = require("../models/sensoresLogSensores");

exports.getSensoresLog = async function (req, res) {
    const { idPecera } = req.params;
    const log = await SensoresLogModel.find({ idPecera });

    res.json(log);
};

exports.getSensoresLogById = async function (req, res) {
    const { id } = req.params;
    const logSearched = await SensoresLogModel.findById(id);    

    res.json(logSearched);
};

exports.getSensoresLogActual = async function (req, res) {
    const { idPecera } = req.params;
    const logList = await sensoresLogSensores.find({ idPecera });
    
    if (logList.length <= 0) {
        res.statusCode = 404;
        res.json({});   
    }
    
    const ordenedList = _.orderBy(logList, ["createOn"], ["desc"]);    
    res.json(_.first(ordenedList));
};

exports.saveSensoresLogFromBody = async function (req, res) {
    let newLog = Object.assign({}, req.body);
    if (newLog.hasOwnProperty("_id")) newLog._id = undefined;
    
    const log = new SensoresLogModel(newLog);
    await log.save();

    const ConfiguracionModel = require("../models/configuracion");    
    const configPecera = await ConfiguracionModel.findOne({idPecera: newLog.idPecera});
    const { docificacionManual, pendienteActualizar, estadoActuadores } = configPecera;

    res.json({ docificacionManual, pendienteActualizar, estadoActuadores });
};