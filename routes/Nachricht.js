const express = require("express");
const router = express.Router();
const {
    getAllNachrichten,
    createNachricht,
    getSingleNachricht,
    deleteSingleNachricht
}            = require("../controllers/Nachricht");


router.route("/nachrichten").get(getAllNachrichten).post(createNachricht);
router.route("/nachrichten/:id").get(getSingleNachricht).delete(deleteSingleNachricht);

module.exports = router;