//require the model to query db:
const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find().sort({ datum: 'desc' });
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

const addLike = async (req, res) => {
    const { id } = req.params;
    const { likerId } = req.body;
    try{
        const updatedPost = await Post.findByIdAndUpdate(id, {$addToSet: {likes: likerId}}, {new: true}).exec();
        res.status(200).json(updatedPost);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

const removeLike = async (req, res) => {
    const { id } = req.params;
    const { likerId } = req.body;
    try{
        const updatedPost = await Post.findByIdAndUpdate(id, {$pull: { likes: likerId }}, {new: true}).exec();
        res.status(200).json(updatedPost);
    }
    catch(err){
        res.status(404).send(err.message);
    }
}


const deletePost = async (req, res) => {
    const { id } = req.params;
    try{
        const deletedPost = await Post.findByIdAndDelete(id);
        res.status(200).json(`The post with the id ${id} has successfully been deleted.`)
    }
    catch(err){
        res.status(404).send(err.message);
    }
}

module.exports = {
    getAllPosts,
    createPost,
    addLike,
    removeLike,
    deletePost
}