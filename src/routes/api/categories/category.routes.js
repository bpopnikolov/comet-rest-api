const {
    helpers,
} = require('../../../helpers');

const passport = require('passport');

const requireToken = passport.authenticate('jwt', {
    session: false,
});

module.exports.getAll = {
    method: 'get',
    path: '/categories',
    middlewares: [],
    handler: ({
        CategoryService,
    }) => helpers.safeHandler(async (req, res, next) => {
        const categories = await CategoryService.getCategories();

        res.status(200).json(categories);
    }),
};
