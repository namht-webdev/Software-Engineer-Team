const Post = require('../models/postModel');

class PostController {
    index(req, res, next) {
        return res.status(200).json({ success: true, message: 'all post here' });
    }

    async create(req, res, next) {
        const { userId, title, type } = { ...req.body };
        try {
            if(!title || !type) {
                return res.status(403).json({success: false, message: 'You have to enter a title and type of this challenge'});
            }
            const newPost = new Post({userId, title, type});
            await newPost.save();
            return res.status(200).json({success: true, message: 'Your challenge is created successfully'});
        } catch (error) {
            return res.status(500).json({success: false, error: error.message});
        }
    }

}

module.exports = new PostController;