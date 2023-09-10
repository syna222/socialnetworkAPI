const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    const { authtoken } = req.headers;
    //1. checken, ob token vorhanden:
    if(!authtoken){
        return res.status(404).send("access denied!"); //return stops any further code execution
    }
    //2. gültigkeit token überprüfen:
    try{
        const verified = jwt.verify(authtoken, process.env.JWT_SECRET); //in diesem Fall wird nur geguckt, ob authtoken mit jwt secret gebildet wurde, man kann aber die verschlüsselten Userdaten noch nutzen für spezifischere User-Erlaubnisse
        if(!verified){
            return res.send("token not valid");
        }else{
            console.log("alles klar aus der middleware!")
            next();
        }
    }
    catch(err){
        if(err.message === "jwt malformed"){
            return res.status(404).send("no valid token");
        }
        res.status(500).send(err.message);
    }
}

module.exports = auth;