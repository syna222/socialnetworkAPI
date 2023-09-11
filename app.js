require("dotenv").config(); //first!
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

//get Routers:
const UserRouter = require("./routes/User");
const NachrichtRouter = require("./routes/Nachricht");
const LoginRouter = require("./routes/Login");

//set up/integrate database:
const db = require("./db/db");
db();

//parst Daten aus req.body (kommend aus HTML Formularen)
app.use(express.urlencoded({ extended: true}));

//parst Daten aus req.body (kommend aus nicht-HTML Formularen)
app.use(express.json());

//erlaubt Zugriff unabhängig vom Client
app.use(cors());

//send welcome:
app.get("/", (req, res) => {
    res.send("Hello World!");
})

//integrate Routers:
app.use("/", UserRouter, NachrichtRouter, LoginRouter);


app.listen(PORT);

