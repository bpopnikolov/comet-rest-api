const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
};

const safeHandler = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (error) {
        next(error, req, res, next);
    }
};

module.exports = {
    capitalizeFirstLetter,
    safeHandler,
};
