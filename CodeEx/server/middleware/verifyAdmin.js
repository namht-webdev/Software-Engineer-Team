const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

verifyAdmin = async (req, res, next) => {
    try {
        const accessToken = req.header('Authorization').split(' ')[1];
        if (!accessToken) {
            return res.status(400).json({ message: 'Please login again, your access token is invalid' });
        }
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, result) => {
            if (err) return res.status(400).json({ success: false, message: err.message });
            const user = await User.findOne({_id: result.user.id});
            if(!user){
                return res.status(404).json({ success: false, message: 'User not found' });
            }
            const checkAdmin = user.role;
            if(!checkAdmin){
                return res.status(404).json({ success: false, message: 'You are not a admin' });
            }
            next();
        })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error });
    }
}

module.exports = verifyAdmin;