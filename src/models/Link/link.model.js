const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

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
        enum: ['social', 'action'],
        default: 'social',
    },
    isHidden: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    });

linkSchema.plugin(mongooseDelete);

module.exports = mongoose.model('Link', linkSchema);
