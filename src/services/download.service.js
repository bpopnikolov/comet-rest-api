const path = require('path');

const dwonloadService = (data, config) => {
    const getFilePath = (fileName) => {
        return path.resolve(`./src/uploads/${fileName}`);
    };

    return {
        getFilePath,
    };
};

module.exports = dwonloadService;
