const jwt = require('jsonwebtoken');

const verifyUser = async (req, res, next) => {
    try {
        const accessToken = req.header('Authorization').split(' ')[1];
        if(!accessToken) return res.status(400).json({ success: false, message: 'Please login again!' });
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(400).json({ success: false, message: 'Please login again!' });
            req.user = user;
        });
        next();
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error'});
    }
}

module.exports = verifyUser;