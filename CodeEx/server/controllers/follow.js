const Follow = require('../models/follow');

class FollowController{
    async index(req, res, next) {
        const {userId, postId} = { ...req.params };
        try {
            const followedPosts = await Follow.find({userId, postId}).leand();
            if(followedPosts){
                return res.json({success: true, followedPosts});
            }
            return res.status(404).json({success: false, message:'Model has not been created!'});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }

    async follow(req, res, next) {
        const {userId, postId} = { ...req.params};
        try {
            const newFollow = new Follow({userId, postId});
            await newFollow.save();
            return res.status(200).json({success: true});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }

    async unfollow(req, res, next){
        const {userId, postId} = { ...req.params};
        try {
            await Follow.deleteOne({userId, postId});
            return res.status(200).json({ success: true});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }

}

module.exports = new FollowController;