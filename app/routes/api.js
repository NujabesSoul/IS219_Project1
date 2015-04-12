var getDataController = require('./controller/api/get'),
    postDataController = require('./controller/api/post');

module.exports = function(app, express) {
    var apiRouter = express.Router();

    apiRouter.route('/data')
        .get(getDataController)
        .post(postDataController);

    return apiRouter;
}
