const jwt = require('jsonwebtoken');

const userService = (data, config) => {
    const setUserInfo = (user) => {
        return {
            id: user._id,
            email: user.email,
            role: user.role,
        };
    };

    const generateToken = (user) => {
        return jwt.sign({
            user: user,
        }, config.passport.secret, {
            // expiresIn: '0'
            issuer: 'comet-api',
        });
    };


    const getUserById = (id) => {
        return data.user.getById(id);
    };

    const getUsers = async () => {
        const filteredDeletedUsers = (await data.user.getAll({}, ['jobsApplied.jobAd']))
            .filter((x) => !x.deleted);
        return filteredDeletedUsers;
    };

    const getUser = (options) => {
        return data.user.getOne(options);
    };

    const login = (user) => {
        const tokenUser = setUserInfo(user);
        return generateToken(tokenUser);
    };

    const register = async (email, password) => {
        const userExcists = await data.user.getOne({
            email,
        });

        if (userExcists) {
            return null;
        }

        const user = await data.user.create({
            email,
            password,
        });

        return user;
    };

    return {
        getUser,
        getUserById,
        getUsers,
        login,
        register,
    };
};

module.exports = userService;
