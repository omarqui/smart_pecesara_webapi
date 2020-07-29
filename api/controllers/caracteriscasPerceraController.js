const caracteriscasPercera = require("../models/caracteriscasPercera");

class CaracteriscasPercera {
    
    async getCaracteriscasPercera(req, res) {    
        const list = await caracteriscasPercera.find();
        res.json(list);
    }

    async getCaracteriscasPerceraById(req, res) {
        const searched = await caracteriscasPercera.findById(req.params.id);
    
        res.json(searched);
    }
    
    async getCaracteriscasPerceraByIdPecera (req, res) {
        let searched = await caracteriscasPercera.find({idPecera: req.params.id});        

        res.json(searched);
    }

    async updateCaracteriscasPercera (req, res) {         
        let newCaracteriscasPercera = req.body;
        await caracteriscasPercera.findByIdAndUpdate(req.params.id, newCaracteriscasPercera);
        
        res.send({});
    }

    async saveCaracteriscasPerceraFromBody (req, res) {    
        let newCaracteriscasPercera = req.body;
        if (newCaracteriscasPercera.hasOwnProperty("_id")) newCaracteriscasPercera._id = undefined;

        const caracteriticas = new caracteriscasPercera(newCaracteriscasPercera);
        caracteriticas.save();
        
        res.send({});   
    }
}

module.exports = CaracteriscasPercera;

