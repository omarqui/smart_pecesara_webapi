const { getStyledText } = require("../utils/getStyledText");

exports.resetDB = async function (req, res) {
  const CaracteriscasPerceraModel = require("../models/caracteriscasPercera");
  const ConfiguracionModel = require('../models/configuracion');
  const PeceraModel = require("../models/pecera");
  const SensoresLogModel = require('../models/sensoresLogSensores');

  await CaracteriscasPerceraModel.deleteMany({});
  await ConfiguracionModel.deleteMany({});
  await PeceraModel.deleteMany({});
  await SensoresLogModel.deleteMany({});
  
  console.log("DB reseted!");
  
  res.send(getStyledText("Smart Pecera Webapi reseteada!"));
};