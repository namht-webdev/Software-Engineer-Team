const siteController = require('../controllers/singleSites');
const userRoute = require('./user');
const postRoute = require('./post');
const friendRoute = require('./friend');

function routes(app) {
    app.get('/', siteController.index)
    app.use('/user', userRoute);
    app.use('/post', postRoute);
    app.use('/friend', friendRoute);
}

module.exports = routes;