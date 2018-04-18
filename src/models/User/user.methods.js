const bcrypt = require('bcryptjs');

const comparePassword = async function(candidatePassword) {
    /* eslint-disable no-invalid-this */
    const userPassword = this.password;
    /* eslint-enable no-invalid-this */
    return bcrypt.compare(candidatePassword, userPassword);
};

module.exports = {
    comparePassword,
};
