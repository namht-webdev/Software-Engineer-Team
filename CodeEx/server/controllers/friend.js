const Friend = require('../models/friend');

class FriendController {

    async sendRequest(req, res, next) {
        const { firstUser, secondUser, nameFirstUser, nameSecondUser } = { ...req.body };
        try {
            const newFriend = new Friend({firstUser, secondUser, nameFriend, nameSecondUser});
            await newFriend.save();
            return res.status(200).json({success: true});
        } catch (error) {
            return res.status(500).json({error: error});
        }
    }

    async isFriend(req, res, next) {
        const { firstUser, secondUser } = { ...req.params };
        try {
            const friends = await Friend.findOne({ firstUser, secondUser }).lean();
            if (friends) {
                return res.status(200).json({ success: true, is_friend: true });
            }
            return res.status(200).json({ success: true, is_friend: false });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async listFriend(req, res, next) {
        const { firstUser } = { ...req.params };
        try {
            const friends = await Friend.find({ firstUser }).lean();
            return res.status(200).json({ success: true, friends: friends });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }
}

module.exports = new FriendController;