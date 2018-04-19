const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const {
    isPassword,
    isEmail,
} = require('./user.validate');
const {
    comparePassword,
    hashPassword,
} = require('./user.methods');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [{
            validator: (value) => isEmail(value),
            msg: 'Invalid email.',
        }],
    },
    password: {
        type: String,
        required: true,
        validate: [{
            validator: (value) => isPassword(value),
            msg: 'Invalid password.',
        }],
    },
    privilege: {
        type: Schema.Types.ObjectId,
        ref: 'Privilige',
    },
    jobsApplied: [{
        jobAd: {
            type: Schema.Types.ObjectId,
            ref: 'JobAd',
        },
        application: {
            type: Schema.Types.ObjectId,
            ref: 'Application',
        },
    }],
});

/**
 * Middleware
 */
userSchema.pre('save', async function() {
    /* eslint-disable no-invalid-this */
    const user = this;
    /* eslint-enable no-invalid-this */
    if (!user.isModified('password')) {
        return;
    }
    user.password = await hashPassword(user);
});

/**
 * Methods.
 */
userSchema.methods.comparePassword = comparePassword;

/**
 * Plugins.
 */
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
