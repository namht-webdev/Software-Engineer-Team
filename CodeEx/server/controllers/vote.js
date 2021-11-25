const Vote = require('../models/vote');

class VoteController{
    async index(req, res, next) {
        const {userId, postId} = { ...req.params };
        try {
            const votedPosts = await Vote.find({userId, postId}).leand();
            if(votedPosts){
                return res.json({success: true, votedPosts});
            }
            return res.status(404).json({success: false, message:'Model has not been created!'});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }

    async vote(req, res, next) {
        const {userId, postId} = { ...req.params};
        try {
            const newVote = new Vote({userId, postId});
            await newVote.save();
            return res.status(200).json({success: true});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }

    async unVote(req, res, next){
        const {userId, postId} = { ...req.params};
        try {
            await Vote.deleteOne({userId, postId});
            return res.status(200).json({ success: true});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error'});
        }
    }

}

module.exports = new VoteController;