const peceraController = require('./peceraController');
let data = require("../constants/pecera");
let moment = require("moment")

class dbServiceMock {
    static find(){
        return data;
    }

    static findById(){
        
    }

    save(){
        
    }

    static findByIdAndUpdate(){

    }
}

class respMock {
    static json(data){
        return data;
    }
}

const ctrl = new peceraController(dbServiceMock);

it("Testing Pecera Controller",()=>{    
    expect(ctrl.getPecera(false, respMock)).toBe(data)
})