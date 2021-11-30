const siteController = require('../controllers/singleSitesController');
const userRoute = require('./userRoute');
const postRoute = require('./postRoute');

function routes(app) {
    app.get('/', siteController.index)
    app.use('/user', userRoute);
    app.use('/post', postRoute);
}

module.exports = routes;