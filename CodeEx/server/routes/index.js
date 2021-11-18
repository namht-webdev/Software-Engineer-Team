const siteController = require('../controllers/singleSites');

function routes(app) {
    app.get('/', siteController.index)
}

module.exports = routes;