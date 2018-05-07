const passport = require('passport');

const {
    middlewares,
} = require('../../../helpers');

module.exports.login = {
    method: 'post',
    path: '/auth/login',
    middlewares: [passport.authenticate('local', {
        session: false,
    })],
    handler: ({
        UserService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const user = req.user;
        let token = null;

        if (user) {
            token = UserService.login(user);
        }

        if (token) {
            return res.status(200).json({
                token,
            });
        }
        return res.status(401).json({
            error: 'Login failed',
        });
    }),
};

module.exports.register = {
    method: 'post',
    path: '/auth/register',
    middlewares: [],
    handler: ({
        UserService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const {
            email,
            password,
        } = req.body;

        if (!email) {
            return res.status(422).send({
                error: 'You must enter an email address',
            });
        }

        if (!password) {
            return res.status(422).send({
                error: 'You must enter a password',
            });
        }
        const user = await UserService.register(email, password);


        if (!user) {
            return res.status(422).send({
                error: 'That email address is already in use',
            });
        }

        const userInfo = UserService.setUserInfo(user);
        const token = UserService.generateToken(userInfo);

        return res.status(201).send({
            msg: 'The registration was successful',
            token,
        });
    }),
};
