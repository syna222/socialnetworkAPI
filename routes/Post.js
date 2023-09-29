const express = require("express");
const router = express.Router();
const {
    getAllPosts,
    createPost,
    deletePost
}            = require("../controllers/Post");

//auth einbauen?

router.route("/posts").get(getAllPosts).post(createPost);
router.route("/posts/:id").delete(deletePost);

module.exports = router;