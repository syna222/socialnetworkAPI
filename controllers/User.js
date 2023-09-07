//require the model to query db:
const User = require("../models/User");

const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);  //json() is a send method
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

const createUser = async (req, res) => {
    const { username, email, passwort } = req.body;
    try{
        const newUser = await User.create({ username, email, passwort });
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

const getSingleUser = async (req, res) => {
    const { id } = req.params; //usually via url
    try{
        const user = await User.findById(id).populate("gesendet").populate("empfangen");
        res.status(200).json(user);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, passwort } = req.body;
    try{
        const updatedUser = await User.findByIdAndUpdate(id, 
            { username, email, passwort },
            {new: true});  //returns updated instance, otherwise old one
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json(`The user with the id ${id} has successfully been deleted.`)
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

//when you write a message from frontend you need to use createMessage() and addMessageToUserSender() and addMessageToUserRec()

const addMessageToUserSender = async (req, res) => {
    const { id } = req.params;
    const { messageid } = req.body;
    try{
        const updatedToDoUser = await User.findByIdAndUpdate(id, {$addtoSet: {gesendet: messageid}}, {new: true}).exec();
        res.status(200).json(updatedToDoUser);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

const addMessageToUserReceiver = async (req, res) => {
    const { id } = req.params;
    const { messageid } = req.body;
    try{
        const updatedToDoUser = await User.findByIdAndUpdate(id, {$addtoSet: {empfangen: messageid}}, {new: true}).exec();
        res.status(200).json(updatedToDoUser);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addMessageToUserSender,
    addMessageToUserReceiver
}