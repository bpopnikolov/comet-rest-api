const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    isURL,
} = require('./link.validate');

const linkSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 128,
    },
    target: {
        type: String,
        required: true,
        validate: [{
            validator: (value) => isURL(value),
            msg: 'Invalid URL',
        }],
    },
    icon: {
        type: String,
        required: true,

    },
    type: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
    isHidden: {
        type: Boolean,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Link', linkSchema);
