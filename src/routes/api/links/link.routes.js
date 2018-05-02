const {
    helpers,
} = require('../../../helpers');

const passport = require('passport');

const requireToken = passport.authenticate('jwt', {
    session: false,
});

module.exports.getAll = {
    method: 'get',
    path: '/links',
    middlewares: [],
    handler: ({
        LinkService,
    }) => helpers.safeHandler(async (req, res, next) => {
        const links = await LinkService.getLinks();
        return res.status(200).json(links);
    }),
};
