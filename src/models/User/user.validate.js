const validator = require('validator');

/**
 * Validates password. Password value must have at least
 * eight characters, at least one uppercase letter,
 * one lowercase letter, one number and one special character:
 * @param {string} value Password value.
 * @return {boolean} Returns true if password mathes pattern else false
 */
const isPassword = (value) => {
    /* eslint-disable max-len */
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    /* eslint-enable max-len */
    return validator.matches(value, passRegex);
};

/**
 * Validates email.
 * @param {string} value Email value.
 * @return {boolean} Returns true if email mathes pattern else false
 */
const isEmail = (value) => {
    return validator.isEmail(value);
};

module.exports = {
    isPassword,
    isEmail,
};
