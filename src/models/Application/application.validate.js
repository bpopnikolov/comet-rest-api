const validator = require('validator');

/**
 * Validates if input name consists only of Alphabetical characters.
 * @param {string} value name value.
 * @return {boolean} Returns true if name matches pattern, else false
 */
const isName = (value) => {
    return validator.isAlpha(value);
}


module.exports = {
    isName,
};
