const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 128,
    },
    Value: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1024,
    },
    isPrimary: {
        type: Boolean,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Contact', contactSchema);
