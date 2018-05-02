const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

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
        type: Schema.Types.ObjectId,
        ref: 'Category',
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
}, {
    timestamps: true,
    });

jobAdSchema.plugin(mongooseDelete);

module.exports = mongoose.model('JobAd', jobAdSchema);
