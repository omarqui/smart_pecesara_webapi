const mongoose = require('mongoose')
const { MONGO_CONNECTION, MONGO_DB } = process.env;

mongoose.connect(`${MONGO_CONNECTION}/${MONGO_DB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    ()=>console.log("Db connected")
).catch(
    err=>console.log(err)
);
