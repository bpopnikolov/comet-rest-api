const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const {
    isName,
} = require('./application.validate');

const applicationSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        validate: [{
            validator: (value) => isName(value),
            msg: 'Invalid first name',
        }],
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        validate: [{
            validator: (value) => isName(value),
            msg: 'Invalid last name',
        }],
    },
    comment: {
        type: String,
        minlength: 0,
        maxlength: 1024,
    },
    CV: {
        type: String,
        required: true,
    },
    CL: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    jobAd: {
        type: Schema.Types.ObjectId,
        ref: 'JobAd',
    },
}, {
    timestamps: true,
});

applicationSchema.plugin(mongooseDelete);

module.exports = mongoose.model('Application', applicationSchema);
