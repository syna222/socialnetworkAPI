//model acts as an intermediary between the application and the database
const mongoose = require("mongoose");

//Schema-Blueprint für Schema-Objekt aus Library destrukturieren:
const { Schema } = mongoose;

//neue Schema-Instanz erstellen:
const Nachricht = new Schema({
    datum: {
        type: Date,
        default: Date.now
    },
    von: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }, 
    an: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    text: {
        type: String
    }
});

//export Schema as the model ("CollectionName", Schema, optionales 3. Arg falls Collectionname nicht/anders pluralisiert werden soll):
module.exports = mongoose.model("nachrichten", Nachricht, "nachrichten");