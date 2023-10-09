const express = require("express");
const router = express.Router();
const {
    getAllPosts,
    createPost,
    getSinglePost,
    addLike,
    removeLike,
    deletePost
}            = require("../controllers/Post");

//auth einbauen?

router.route("/posts").get(getAllPosts).post(createPost);
router.route("/posts/:id").get(getSinglePost).delete(deletePost);

router.route("/posts/:id/addlike").post(addLike);
router.route("/posts/:id/removelike").delete(removeLike);

module.exports = router;