const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addMessageToUserSender,
    addMessageToUserReceiver,
    removeMessageFromUserSender,
    removeMessageFromUserReceiver,
    addInterlocutor
}           = require("../controllers/User");
const auth = require("../middleware/auth");


router.route("/users").get(getAllUsers).post(createUser);
router.route("/users/:id").get(getSingleUser).put(updateUser).delete(deleteUser);  //also ad auth here but for admin?

router.route("/users/:id/addinterlocutor").post(addInterlocutor);

module.exports = router;