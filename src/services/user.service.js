const userService = (data) => {
    const getUserById = (id) => {
        return data.user.getUserById(id);
    };

    const getUser = (options) => {
        return data.user.getOne(options);
    };

    return {
        getUser,
        getUserById,
    };
};

module.exports = userService;
