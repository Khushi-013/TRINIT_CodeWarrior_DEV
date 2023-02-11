const mongoose = require("mongoose");

mongoose.connect("mongo://localhost:27017/usersinfo",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection');`)
})