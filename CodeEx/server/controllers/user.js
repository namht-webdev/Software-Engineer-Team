const User = require('../models/user');
const argon2 = require('argon2');

class UserController {
    async register(req, res, next) {
        const { username, password, name } = { ...req.body };
        try {
            if (!username || !password || !name) {
                return res.status(401).json({ success: false, message: 'You have to enter username and password' });
            }
            const user = await User.findOne({ username }).lean();

            if (user) {
                return res.status(402).json({ success: false, message: 'This username already exists' });
            }
            const hashedPassword = await argon2.hash(password);
            const newUser = new User({ username, password: hashedPassword, name });
            await newUser.save();
            return res.status(200).json({ success: true, message: 'Registration successful' });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async login(req, res, next) {
        const { username, password } = { ...req.body };
        try {
            const user = await User.findOne({ username }).lean();

            if (user) {
                const isUser = await argon2.verify(user.password, password);
                if (isUser)
                    return res.status(200).json({ success: true, message: 'You are logining' });
            }
            return res.status(400).json({ success: false, message: 'Your username or password is incorrect' });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }
}

module.exports = new UserController;