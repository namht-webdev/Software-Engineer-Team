const siteController = require('../controllers/singleSites');
const userRoute = require('./user');
const postRoute = require('./post');

function routes(app) {
    app.get('/', siteController.index)
    app.use('/user', userRoute);
    app.use('/post', postRoute);
}

module.exports = routes;