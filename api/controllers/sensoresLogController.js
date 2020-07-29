const _ = require("lodash");
const SensoresLogModel = require('../models/sensoresLogSensores');
const sensoresLogSensores = require("../models/sensoresLogSensores");

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

exports.getSensoresLog = async function (req, res) {
    const { idPecera } = req.params;
    const log = await SensoresLogModel.find({ idPecera }).sort([[ 'createOn', -1]]);

    res.json(log);
};

exports.getSensoresLogById = async function (req, res) {
    const { id } = req.params;
    Date.parse()

    const logSearched = await SensoresLogModel.findById(id);    

    res.json(logSearched);
};

exports.getSensoresLogBetweenDates = async function (req, res) {
    let { desde, hasta } = req.params;
    hasta = addDays(hasta, 1);
    
    const logSearched = await SensoresLogModel.find({
        createOn: {
            $gte: desde,
            $lt: hasta
        }
    }).sort({
        createOn: -1 
    });

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