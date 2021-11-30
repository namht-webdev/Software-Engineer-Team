const User = require('../models/userModel');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const sentMail = require('./sentMail');
require('dotenv').config();

const {
    ACCESS_TOKEN_SECRET,
    ACTIVATION_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET
} = process.env;


class UserController {
    async register(req, res) {
        const { username, password, name, email } = { ...req.body };
        try {
            if (!username || !password || !name || !email) {
                return res.status(400).json({ success: false, message: 'You have to enter username and password' });
            }
            const user = await User.findOne({ username }).lean();
            const checkEmail = await User.findOne({ email }).lean();
            if (user) {
                return res.status(400).json({ success: false, message: 'This username already exists, please use another username!' });
            }

            if (checkEmail) {
                return res.status(400).json({ success: false, message: 'This email already exists, please use another email!' });
            }

            if (!validateEmail(email)) {
                return res.status(400).json({ success: false, message: 'Invalid email' });
            }

            if (password.length < 6) {
                return res.status(400).json({ success: false, message: 'Password must be at least 6 characters required' });
            }
            const hashedPassword = await argon2.hash(password);
            const newUser = new User({ username, password: hashedPassword, name, email });
            const activationToken = createActivationToken({ newUser });
            const url = `${process.env.CLIENT_URL}/activate/${activationToken}`;

            sentMail(email, url, 'Verify your email!');


            //await newUser.save();
            return res.status(200).json({ success: true, message: 'Registration successful' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async verifyEmail(req, res) {
        try {
            const { activationToken } = req.body;
            if (!activationToken) return res.status(403).json({ error: error.message });
            jwt.verify(activationToken, ACTIVATION_TOKEN_SECRET, (error, user) => {
                if (error) { return res.status(400).json({ success: false, message: error.message }) }
                const { username, password, email, name } = user.newUser;
                const checkEmail = User.findOne({ email });
                if (checkEmail) {
                    return res.status(400).json({ success: false, message: 'Your account has been activated!' });
                }
                const newUser = new User({ username, password, email, name });
                newUser.save();
                return res.json({ message: 'Your account is activated!' });
            })
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'This email invalid!' });
            }
            const validPassword = await argon2.verify(user.password, password);
            if (!validPassword) {
                return res.status(400).json({ message: 'Ypur password incorrect!' });
            }

            const refreshToken = createRefreshToken({ id: user._id });
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path: 'user/refreshToken',
                maxAge: 3600 * 24 * 1000 * 7
            })
            return res.json({ message: 'Login success!' })
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    }

    async getAccessToken(req, res) {
        try {
            const { refreshToken } = req.cookies;
            jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.status(400).json({ message: err.message });
                return res.json(user);
            })
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    }

}

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const createActivationToken = (payload) => {
    return jwt.sign(payload, ACTIVATION_TOKEN_SECRET, { expiresIn: "5m" });
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15" });
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "10d" });
}

module.exports = new UserController;