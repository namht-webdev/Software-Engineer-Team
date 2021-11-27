const User = require('../models/user');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { ACCESS_TOKEN_SECRET } = process.env;


class UserController {
    async register(req, res, next) {
        const { username, password, name, email } = { ...req.body };
        try {
            if (!username || !password || !name || !email) {
                return res.status(400).json({ success: false, message: 'You have to enter username and password' });
            }
            const user = await User.findOne({ username }).lean();
            if (user) {
                return res.status(400).json({ success: false, message: 'This username already exists' });
            }
            if(!validateEmail){
                return res.status(400).json({ success: false, message: 'Invalid email'});
            }

            const hashedPassword = await argon2.hash(password);
            const newUser = new User({ username, password: hashedPassword, name, email });
            const accessToken = createAccessToken({newUser});
            console.log(accessToken);
            await newUser.save();
            return res.status(200).json({ success: true, message: 'Registration successful', accessToken });
        } catch (error) {
            return res.status(500).json({ error: error.message });
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

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const createAccessToken = (payload) => {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
}

module.exports = new UserController;