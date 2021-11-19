const User = require('../models/user');

class UserController {
    async register(req, res, next) {
        const { username, password } = { ...req.body };
        try {
            if (!username || !password) {
                return res.status(401).json({ success: false, message: 'You have to enter username and password' });
            }
            const user = await User.findOne({ username: username }).lean();

            if (user) {
                return res.status(402).json({ success: false, message: 'This username already exists' });
            }
            const newUser = new User({ username, password });
            await newUser.save();
            return res.status(200).json({ success: true, message: 'Registration successful' });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async login(req, res, next) {
        const { username, password } = { ...req.body };
        try {
            const user = await User.findOne({ username, password }).lean();
            if (user) {
                return res.status(200).json({ success: true, message: 'You are logining' });
            }
            return res.status(400).json({ success: false, message: 'Your username or password is incorrect' });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
        next();
    }
}

module.exports = new UserController;