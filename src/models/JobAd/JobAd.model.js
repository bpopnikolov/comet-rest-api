const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobAdSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 256,
    },
    desc: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16384,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    usersApplied: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        application: {
            type: Schema.Types.ObjectId,
            ref: 'Application',
        },
    }],
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('JobAd', jobAdSchema);
