const {
    middlewares,
} = require('../../../helpers');



module.exports.getAll = {
    method: 'get',
    path: '/categories',
    middlewares: [],
    handler: ({
        CategoryService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const categories = await CategoryService.getCategories();

        res.status(200).json(categories);
    }),
};
