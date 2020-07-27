const PeceraModel = require('../models/pecera');

async function getIdPeceraHelper (idManual) {
    const pecera = await PeceraModel.findOne({ idManual }, { _id: 1 });
    return pecera._id;
}

module.exports = getIdPeceraHelper;