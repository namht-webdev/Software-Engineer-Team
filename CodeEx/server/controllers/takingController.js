const Taking = require('../models/takingModel');

class TakingController {

    async index(req, res, next) {
        const { userId } = { ...req.params };
        try {
            const taking = await Taking.find({ userId}).lean();
            if(taking){
                return res.json({success: true});
            }
            return res.status(404).json({success: false, message:'Cannot found userId'});
        } catch (error) {
            return res.status(500).json({success: false, message: 'Internal Server Error!'});
        }
    }

    async enroll(req, res, next) {
        const { userId, postId } = { ...req.body };
        try {
            const isTaking = await Taking.findOne(userId, postId);
            if (isTaking) {
                return res.status(204).json({ success: true });
            }
            const newTaking = new Taking({ userId, postId, isFollow: true });
            await newTaking.save();
            return res.status(201).json({ success: true });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async unenroll(req, res, next) {
        const { userId, postId } = { ...req.body };
        try {
            const isTaking = await Taking.findOne(userId, postId);
            if (isTaking) {
                Taking.deleteOne({_id: isTaking._id});
                return res.status(200).json({ success: true });
            }
            return res.status(404).json({ success: false });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async submit(req, res, next) {
        const { userId, postId } = { ...req.body };
        try {
            const isTaking = await Taking.findOne(userId, postId);
            if (isTaking) {
                const res = await Taking.updateOne({_id: isTaking._id}, {isSubmit: true});
                return res.status(200).json({ success: true });
            }
            return res.status(404).json({ success: false });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

}