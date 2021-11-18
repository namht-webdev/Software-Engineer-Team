const Users = require('../models/user');

class UserController {
    async register(req, res, next) {
        const {username, password } = { ...req.body };
        try {
            if(!username || !password) {
                return res.status(401).json({success: false, message: 'You have to enter username and password'});
            }
            const user = await Users.findOne({username:username}).lean();

            if(user) {
                return res.status(402).json({success: false, message:'This username already exists'});
            }
            const newUser = new Users({username, password});
            await newUser.save();
            return res.status(200).json({success: true, message:'Registration successful'});
        } catch (error) {
            return res.status(500).json({error: error});
        }
    }
}

module.exports = new UserController;