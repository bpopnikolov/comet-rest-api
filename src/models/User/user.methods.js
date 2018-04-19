const bcrypt = require('bcryptjs');
const config = require('../../../config');

const comparePassword = async function(candidatePassword) {
    /* eslint-disable no-invalid-this */
    const userPassword = this.password;
    /* eslint-enable no-invalid-this */
    return bcrypt.compare(candidatePassword, userPassword);
};


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
    comparePassword,
    hashPassword,
};
