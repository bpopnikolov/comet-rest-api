const {
    helpers,
} = require('../../../helpers');
// const paginationMiddleware = ({ pageLimits, countLimit }) => () => (req, res) => {
//     const page = Math.max(pageLimits.min, Math.min(pageLimits.max, req.query.page));

//     req.page = page;
//     req.count = count;
// }

module.exports.getAll = {
    method: 'get',
    path: '/users',
    middlewares: [
        // paginationMiddleware({ pageLimits: { max: 10, min: 0 } }),
    ],
    handler: ({
        UsersService,
    }) => helpers.safeHandler(async (req, res, next) => {
        console.log('users');
    }),
};

module.exports.getById = {
    method: 'get',
    path: '/users/:id',
    middlewares: [
        // paginationMiddleware({ pageLimits: { max: 6, min: 2 } }),
    ],
    handler: ({
        UsersService,
    }) => helpers.safeHandler(async (req, res, next) => {
        console.log('user');
    }),
};
