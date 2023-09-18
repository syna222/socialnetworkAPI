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
    const { von, an, betreff, text } = req.body;
    try{
        const newNachricht = await Nachricht.create({ von, an, betreff, text});  //date is created by default by mongoose
        res.status(201).json(newNachricht); //nur id zurück?
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

const getSingleNachricht = async (req, res) => {
    const { id } = req.params;
    try{
        const singleNachricht = await Nachricht.findById(id);
        res.status(200).json(singleNachricht);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

//no update-method for nachrichten for now

const deleteSingleNachricht = async (req, res) => {
    const { id } = req.params;
    try{
        const deletedNachricht = await Nachricht.findByIdAndDelete(id);
        res.status(200).send(`The todo ${deletedToDo.text} has successfully been deleted.`);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

module.exports = {
    getAllNachrichten,
    createNachricht,
    getSingleNachricht,
    deleteSingleNachricht
}