const express = require("express");
const router = express.Router();
const {
    getAllPosts,
    createPost
}            = require("../controllers/Post");

//auth einbauen?

router.route("/posts").get(getAllPosts).post(createPost);

module.exports = router;