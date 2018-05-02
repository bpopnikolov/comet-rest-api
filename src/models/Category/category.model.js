const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const mongooseDelete = require('mongoose-delete');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 24,
    },
}, {
    timestamps: true,
});

categorySchema.plugin(uniqueValidator);
categorySchema.plugin(mongooseDelete);

module.exports = mongoose.model('Category', categorySchema);
