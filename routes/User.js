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


router.route("/users").get(getAllUsers).post(createUser);
router.route("/users/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/users/:id/addnachrichtsender").post(addMessageToUserSender);
router.route("/users/:id/addnachrichtrec").post(addMessageToUserReceiver);
router.route("/users/:id/removenachrichtsender").put(removeMessageFromUserSender); //put instead of delete because the whole array field shouldn't be delete but updated
router.route("/users/:id/removenachrichtrec").put(removeMessageFromUserReceiver);

module.exports = router;