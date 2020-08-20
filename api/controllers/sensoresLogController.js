const _ = require("lodash");
const SensoresLogModel = require('../models/sensoresLogSensores');
const sensoresLogSensores = require("../models/sensoresLogSensores");
const moment = require('moment');

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
    const { desde, hasta, idPecera, horaInicio, horaFin } = req.params;
    
    const desdeFinal = moment.utc((horaInicio) ? `${desde}T${horaInicio}:00-04:00` : desde);
    const hastaFinal = moment.utc((horaFin) ? `${hasta}T${horaFin}:59-04:00`: addDays(hasta, 1));    
    
    let logSearched = await SensoresLogModel.find({
        idPecera,
        createOn: {
            $gte: desdeFinal.format(),
            $lt: hastaFinal.format()
        }
    }).sort({
        createOn: -1 
    });
    
    const logResult = logSearched.map(l=>{
        console.log(l.createOn);
        console.log(moment.utc(l.createOn).local().format());
        l.createOn = moment.utc(l.createOn).local().format();
        return l;
    });

    
    console.log(logResult);
    
    res.json(logResult);
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
    
    newLog.createOn = Date.now();        
    const log = new SensoresLogModel(newLog);
    
    await log.save();

    const ConfiguracionModel = require("../models/configuracion");    
    const configPecera = await ConfiguracionModel.findOne({idPecera: newLog.idPecera});
    const { docificacionManual, pendienteActualizar, estadoActuadores } = configPecera;

    res.json({ docificacionManual, pendienteActualizar, estadoActuadores });
};