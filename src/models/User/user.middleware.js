const bcrypt = require('bcrypt');

const config = require('../../../config');

/**
 * Hashes password using bcrypt.
 * Middleware type: pre-save.
 * @param {String} password
 * @param {Number} saltFactor number of salt rounds
 * @return {Promise} A promise to be either resolved with the
 *  encrypted data salt or rejected with an Error
 */
const hashPassword = async (password, saltFactor) => {
    return bcrypt.hash(password, saltFactor);
};

module.exports = {
    hashPassword,
};
