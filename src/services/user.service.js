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
        return data.user.getUserById(id);
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
        console.log(userExcists);
        const user = await data.user.create({
            email,
            password,
        });

        return user;
    };

    return {
        getUser,
        getUserById,
        login,
        register,
    };
};

module.exports = userService;
