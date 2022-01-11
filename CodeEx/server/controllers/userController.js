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
            const transformUsername = username.replace(/\s/g, '').toLowerCase();
            const user = await User.findOne({ username: transformUsername }).lean();
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
            const newUser = new User({ username: transformUsername, password: hashedPassword, name, email });
            // const activationToken = createActivationToken({ newUser });
            // const url = `${process.env.CLIENT_URL}/activate/${activationToken}`;

            // sentMail(email, url, 'Verify your email!');
            newUser.save()
            //await newUser.save();
            return res.status(200).json({ success: true, message: 'Registration successful' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // async verifyEmail(req, res) {
    //     try {
    //         const { activationToken } = req.body;
    //         if (!activationToken) return res.status(403).json({ error: error.message });
    //         jwt.verify(activationToken, ACTIVATION_TOKEN_SECRET, async (error, user) => {
    //             if (error) { return res.status(400).json({ success: false, message: error.message }) }
    //             const { username, password, email, name } = user.newUser;
    //             const checkEmail = await User.findOne({ email });

    //             if (checkEmail) {
    //                 console.log(checkEmail);
    //                 return res.status(400).json({ success: false, message: 'This email already exists!' });
    //             }
    //             const newUser = new User({ username, password, email, name });
    //             newUser.save();
    //             return res.json({ message: 'Your account is activated!' });
    //         })
    //     } catch (error) {
    //         return res.status(500).json({ error: error.message });
    //     }
    // }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOneWithDeleted({ email });
            if (!user) {
                return res.status(400).json({ message: 'This email invalid!' });
            }
            const validPassword = await argon2.verify(user.password, password);
            if (!validPassword) {
                return res.status(400).json({ message: 'Ypur password incorrect!' });
            }
            if (user.deleted) {
                return res.json({ message: 'Your account has been blocked!' })
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
                const accessToken = createAccessToken({ user })
                return res.json(accessToken);
            })
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    }

    async forgotPassword(req, res) {
        try {
            const { email } = req.body;
            if (!validateEmail(email)) return res.status(400).json({ success: false, message: 'Invalid email' });
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ success: false, message: 'This email has not been registered!' });
            const accessToken = createAccessToken({ id: user._id });
            const url = `${process.env.CLIENT_URL}/user/reset/${accessToken}`
            sentMail(email, url, "Reset password!");
            return res.status(200).json({ success: true, message: 'Please check your email to reset your password!' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async resetPassword(req, res) {
        try {
            const { password } = req.body;
            if (password.length < 6) {
                return res.status(400).json({ success: false, message: 'Password must be at least 6 characters required' });
            }
            const passwordHashed = await argon2.hash(password);
            const user = await User.findOne({ _id: req.user.id });
            if (!user) return res.status(400).json({ success: false, message: 'Please reset again!' });
            await User.findOneAndUpdate({ _id: req.user.id }, {
                password: passwordHashed
            })
            return res.status(200).json({ success: true, message: 'Your password has been reset' });
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    }

    async blockUser(req, res) {
        try {
            const { email } = req.body;
            const user = await User.findOneWithDeleted({ email });
            if (!user) {
                return res.status(400).json({ message: 'This email address is not exists!' });
            }

            if (user.deleted) {
                return res.status(400).json({ message: 'This email has been blocked!' });
            }

            await user.delete();
            return res.json({ message: "This user is blocked!" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async unblockUser(req, res) {
        try {
            const { email } = req.body;
            if (!validateEmail(email)) {
                return res.status(400).json({ message: 'Invalid email!' });
            }
            const user = await User.findOneWithDeleted({ email });
            if(!user) {
                return res.status(400).json({ message: 'This user is not blocked!'});
            }
            await user.restore();
            return res.status(200).json({ message: 'This email is unblock!'});
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
        );
};

const createActivationToken = (payload) => {
    return jwt.sign(payload, ACTIVATION_TOKEN_SECRET, { expiresIn: "5m" });
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "10d" });
}

module.exports = new UserController;