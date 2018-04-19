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
        enum: ['Active', 'Inactive'],
        default: 'Active',
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
});

module.exports = mongoose.model('JobAd', jobAdSchema);
