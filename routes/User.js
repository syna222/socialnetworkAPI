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
    removeMessageFromUserReceiver
}           = require("../controllers/User");
const auth = require("../middleware/auth");


router.route("/users").get(getAllUsers).post(createUser);
router.route("/users/:id").get(getSingleUser).put(updateUser).delete(deleteUser);  //also ad auth here but for admin?

router.route("/users/:id/addnachrichtsender").post(auth, addMessageToUserSender);
router.route("/users/:id/addnachrichtrec").post(auth, addMessageToUserReceiver);
router.route("/users/:id/removenachrichtsender").put(auth, removeMessageFromUserSender); //put instead of delete because the whole array field shouldn't be delete but updated
router.route("/users/:id/removenachrichtrec").put(auth, removeMessageFromUserReceiver);

module.exports = router;