//require the model to query db:
const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    } 
    catch(err){
        res.status(404).send(err.message);
    }
}

const createPost = async (req, res) => {
    const { datum, von, text } = req.body;
    try{
        const newPost = await Post.create({ datum, von, text });
        res.status(201).json(newPost);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

module.exports = {
    getAllPosts,
    createPost
}