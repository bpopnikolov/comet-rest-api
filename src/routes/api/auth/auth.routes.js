

const safeHandler = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (error) {
        next(error, req, res, next);
    }
};



module.exports.getAll = {
    method: 'post',
    path: '/auth/login',
    middlewares: [
    ],
    handler: ({ usersService }) => async (req, res, next) => {
        const { page, count } = req.query;
        res.json('IT ALL USERS');
    },
};

module.exports.getById = {
    method: 'post',
    path: '/auth/register',
    middlewares: [
    ],
    handler: ({ usersService }) => safeHandler(async (req, res, next) => {
        const { id } = req.params;
        res.json('IT WORKS');
    }),
};
