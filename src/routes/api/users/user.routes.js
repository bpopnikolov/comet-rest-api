

const safeHandler = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (error) {
        next(error, req, res, next);
    }
};

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
    handler: ({ usersService }) => async (req, res, next) => {
        const { page, count } = req.query;
        res.json('IT ALL USERS');
    },
};

module.exports.getById = {
    method: 'get',
    path: '/users/:id',
    middlewares: [
        // paginationMiddleware({ pageLimits: { max: 6, min: 2 } }),
    ],
    handler: ({ usersService }) => safeHandler(async (req, res, next) => {
        const { id } = req.params;
        console.log('asdasd');
        res.json('IT WORKS');
    }),
};
