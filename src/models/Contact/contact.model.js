const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

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
    icon: {
        type: String,
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
}, {
    timestamps: true,
});

contactSchema.plugin(mongooseDelete);

module.exports = mongoose.model('Contact', contactSchema);
