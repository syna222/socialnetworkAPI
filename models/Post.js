//model acts as an intermediary between the application and the database
const mongoose = require("mongoose");

//Schema-Blueprint für Schema-Objekt aus Library destrukturieren:
const { Schema } = mongoose;

//neue Schema-Instanz erstellen:
const Post = new Schema({
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
    text: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,  //das bedeutet ja nur, das hierin die ids der Nachrichten mit user als Empfänger gespeichert werden
        ref: "users", //references same collection?
        default: []
    }]
})

//export Schema as the model ("CollectionName", Schema, optionales 3. Arg falls Collectionname nicht/anders pluralisiert werden soll):
module.exports = mongoose.model("posts", Post);