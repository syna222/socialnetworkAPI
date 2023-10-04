//model acts as an intermediary between the application and the database
const mongoose = require("mongoose");

//Schema-Blueprint für Schema-Objekt aus Library destrukturieren:
const { Schema } = mongoose;

//neue Schema-Instanz erstellen:
const Nachricht = new Schema({
    datum: {
        type: Date,
        default: Date.now,
        required: true
    },
    von: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }, 
    an: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

//export Schema as the model ("CollectionName", Schema, optionales 3. Arg falls Collectionname nicht/anders pluralisiert werden soll):
module.exports = mongoose.model("nachrichten", Nachricht, "nachrichten");