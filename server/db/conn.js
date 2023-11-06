const mongoose = require("mongoose");

const DB = "mongodb+srv://roshanipb98:roshani2409@cluster0.ssd0yav.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));