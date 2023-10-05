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
        const user = await User.findById(id).populate("interaktion");
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


//when you write a message from frontend check if sender's id is in recipients interaktion field and if recipient's id is in sender's interaktion field! (otherwise, use addInterlocutor())

const addInterlocutor = async (req, res) => {
    const { id } = req.params; //id of user who's interaktion field is changed
    const { interlocId } = req.body;
    try{
        const updatedUser = await User.findByIdAndUpdate(id, {$addToSet: {interaktion: interlocId}}, {new: true}).exec();
        res.status(200).json(updatedUser);
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
    addInterlocutor
}