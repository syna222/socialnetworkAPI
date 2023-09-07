//require the model to query db:
const Nachricht = require("../models/Nachricht");

const getAllNachrichten = async (req, res) => {
    try{
        const nachrichten = await Nachricht.find();
        res.status(200).json(nachrichten); //json() is a send method
    }
    catch(err){
        res.satus(404).send(err.message);
    }
}

const createNachricht = async (req, res) => {
    try{

    }
    catch(err){
        
    }
}