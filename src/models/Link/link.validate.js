const validator = require('validator');

/**
 * Validates URL.
 * @param {string} value URL value.
 * @return {boolean} Returns true if URL matches pattern, else false
 */

const isURL = (value) => {
    return validator.isURL(value);
};

module.exports = {
    isURL,
};
