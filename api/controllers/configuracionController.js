const ConfiguracionModel = require('../models/configuracion');

exports.getConfig = async function (req, res) {
    const idPecera = req.params.idPecera;
    const config = await ConfiguracionModel.findOne({ idPecera });
    let simpleConfig = {};
    
    if (config)
        simpleConfig = getSimpleConfig(config);

    res.json(simpleConfig);
};

exports.updateConfigFromBody = async function (req, res) {
    let { idPecera, ...newConfig } = req.body;

    const configActual = await ConfiguracionModel.find({ idPecera })

    if (!configActual) {
        res.statusCode = 404;
        res.json({});
    }

    newConfig = Object.assign({}, newConfig, { pendienteActualizar: 2 })
    
    if (!newConfig.fechaInternaReloj) delete newConfig.fechaInternaReloj;
    if (!newConfig.proximaFechaMantenimiento) delete newConfig.proximaFechaMantenimiento;
    if (!newConfig.horarioComida1) delete newConfig.horarioComida1;
    if (!newConfig.horarioComida2) delete newConfig.horarioComida2;
    if (!newConfig.docificacionManual) delete newConfig.docificacionManual;
    if (!newConfig.pendienteActualizar) delete newConfig.pendienteActualizar;
    if (!newConfig.estadoActuadores) delete newConfig.estadoActuadores;
    
    await ConfiguracionModel.updateOne({ idPecera }, newConfig);
    console.log(idPecera);
    const updatedConfig = await ConfiguracionModel.findOne({ idPecera });

    res.json(getSimpleConfig(updatedConfig));
};

exports.getEstadoConfiguracion = async function (req, res) {
    const idPecera = req.params.idPecera;

    const result = await ConfiguracionModel.findOne({ idPecera }, { pendienteActualizar: 1, _id: 0 });
    res.json(result);
};

exports.getEstadoActuadores = async function (req, res) {
    const idPecera = req.params.idPecera;
    const result = await ConfiguracionModel.findOne({ idPecera }, { estadoActuadores: 1, _id:0 });
    res.json(result);
};


exports.updateEstadoConfiguracion = async function (req, res) {
    const { idPecera } = req.params;
    const { pendienteActualizar } = req.body;
    await ConfiguracionModel.updateOne({idPecera}, { pendienteActualizar });
    res.redirect(req.url)
};

exports.updateEstadoActuadores = async function (req, res) {
    const { idPecera } = req.params;
    const { estadoActuadores } = req.body;
    
    await ConfiguracionModel.updateOne({idPecera}, { estadoActuadores });
    res.redirect(req.url)
};

exports.updateFechaInterna = async function (req, res) {
    const { 
        idPecera, 
        fechaInternaReloj 
    } = req.params;
    
    await ConfiguracionModel.updateOne({idPecera}, { fechaInternaReloj });
    res.redirect(`/configuracion/${idPecera}`);
};

function getSimpleConfig(config) {
    return Object.assign({}, config.toObject(), {
        docificacionManual: undefined,
        pendienteActualizar: undefined,
        estadoActuadores: undefined
    });
}