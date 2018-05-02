const mongoose = require('mongoose');

const {
    Category,
} = require('../models');
const config = require('../../config');

mongoose.connect(config.db.mongo.uri);

const seedCategories = async () => {
    const data = [{
        name: 'IT',
    }, {
        name: 'Marketing',

    }, {
        name: 'Sales',

    }, {
        name: 'Operations',
    }, {
        name: 'Other',
    }];

    return await Category.insertMany(data);
};

seedCategories();
module.exports = seedCategories;
