//require the model to query db:
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { email, passwort } = req.body;
    try{
        const [user] = await User.find({ email, passwort }).populate("interaktion");
        if(user){
            const token = jwt.sign({ _id: user.id}, process.env.JWT_SECRET); //token in app localstorage speichern und abgreifen für middleware auth, die vor routes gespannt wird
            return res.status(200).send({ token, user });
        } 
        else{
            return res.status(404).send("User nicht gefunden.");
        }
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

module.exports = { login };