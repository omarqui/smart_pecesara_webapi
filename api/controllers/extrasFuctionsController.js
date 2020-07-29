exports.resetDB = async function (req, res) {
    const CaracteriscasPerceraModel = require("../api/models/caracteriscasPercera");
  const ConfiguracionModel = require('../api/models/configuracion');
  const PeceraModel = require("../api/models/pecera");
  const SensoresLogModel = require('../api/models/sensoresLogSensores');

  await CaracteriscasPerceraModel.remove();
  await ConfiguracionModel.remove();
  await PeceraModel.remove();
  await SensoresLogModel.remove();
  
  console.log("DB reseted!");
  
  rep.send("<h1 style='margin-top:40px;text-align:center; font-family: Arial, sans-serif;'>" +
    "Smart Pecera Webapi reseteada!" +
    "</h1>");
};