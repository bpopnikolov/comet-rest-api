const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {
    isEmail,
} = require('../User/user.validate');

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 128,
    },
    value: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1024,
    },
    email: {
        type: String,
        validate: [{
            validator: (value) => isEmail(value),
            msg: 'Invalid email.',
        }],
    },
    phone: {
        type: String,
    },
    isPrimary: {
        type: Boolean,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Contact', contactSchema);
