//model acts as an intermediary between the application and the database
const mongoose = require("mongoose");

//Schema-Blueprint für Schema-Objekt aus Library destrukturieren:
const { Schema } = mongoose;

//neue Schema-Instanz erstellen:
const User = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwort: {
        type: String,
        required: true
    },
    empfangen: [{
        type: mongoose.Schema.Types.ObjectId,  //das bedeutet ja nur, das hierin die ids der Nachrichten mit user als Empfänger gespeichert werden
        ref: "nachrichten", //references other collection
        default: []
    }],
    gesendet: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "nachrichten", //references other collection
        default: []
    }],
    interaktion: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users", //references same collection?
        default: []
    }]
});

//export Schema as the model ("CollectionName", Schema, optionales 3. Arg falls Collectionname nicht/anders pluralisiert werden soll):
module.exports = mongoose.model("users", User);