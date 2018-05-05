const {
    middlewares,
} = require('../../../helpers');

module.exports.getAll = {
    method: 'get',
    path: '/users',
    middlewares: [
        // paginationMiddleware({ pageLimits: { max: 10, min: 0 } }),
    ],
    handler: ({
        UserService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const users = await UserService.getUsers();
        res.status(200).json(users);
    }),
};

module.exports.getById = {
    method: 'get',
    path: '/users/:id',
    middlewares: [
        // paginationMiddleware({ pageLimits: { max: 6, min: 2 } }),
    ],
    handler: ({
        UserService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        res.status(200).json([]);
    }),
};
