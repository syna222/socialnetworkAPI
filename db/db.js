const mongoose = require("mongoose");

//Connectionstring MongoDB: zwischen / und ? die Collection/Database spezifizieren:
//.....mongodb.net/mycollectionname?.....

const db = async (req, res) => {
    try{
        const URI = process.env.MONGO_URI;
        mongoose.set("strictQuery", true);
        await mongoose.connect(URI);
        console.log("connected to db");
    } 
    catch(err){
        console.log(err);
        req.status(500).send("could not connect to db");
    }
}

module.exports = db;