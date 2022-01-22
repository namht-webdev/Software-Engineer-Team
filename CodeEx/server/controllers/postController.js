const Post = require('../models/postModel');

class PostController {
    async index(req, res, next) {
        try {
            
            const post = await Post.find({status: true});
            if(post.length === 0) {
                return res.status(200).json({success: false, message: 'No post found'});
            }
            return res.status(200).json({success: true, post});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }

    async my_challenge(req, res, next) {
        const {userId} = req.body;
        try {
            const post = await Post.find({userId});
            if(post.length === 0) {
                return res.status(200).json({success: false, message: 'No post found'});
            }
            return res.status(200).json({success: true, data: post});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }

    async waiting_challenge(req, res, next) {
        try {
            const post = await Post.find({status: false});
            if(post.length === 0) {
                return res.status(200).json({success: false, message: 'No post found'});
            }
            return res.status(200).json({success: true, data: post});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }

    async create(req, res, next) {
        const { userId, title, type, dayStart, dayEnd, result, description } = { ...req.body };
        try {
            if(!title || !type || !dayStart || !dayEnd|| !result || !description){
                return res.status(200).json({success: false, message: 'You have to enter a title and type of this challenge'});
            }
            const newPost = new Post({userId, title, type, dayStart, dayEnd, result, description});
            await newPost.save();
            return res.status(200).json({success: true, message: 'Your challenge is created successfully'});
        } catch (error) {
            return res.status(500).json({success: false, error: error.message});
        }
    }

}

module.exports = new PostController;