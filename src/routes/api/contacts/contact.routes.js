const {
    helpers,
} = require('../../../helpers');

const passport = require('passport');

const requireToken = passport.authenticate('jwt', {
    session: false,
});

module.exports.getAll = {
    method: 'get',
    path: '/contacts',
    middlewares: [],
    handler: ({
        ContactService,
    }) => helpers.safeHandler(async (req, res, next) => {
        const contacts = await ContactService.getContacts();

        res.status(200).json(contacts);
    }),
};
