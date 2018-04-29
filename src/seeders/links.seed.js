const mongoose = require('mongoose');

const {
    Link,
} = require('../models');
const config = require('../../config');

mongoose.connect(config.db.mongo.uri);

const seedLniks = async () => {
    const data = [{
        name: 'Google Search',
        target: `https://www.google.bg/`,
        icon: 'home',
        type: 'active',
    }, {
        name: 'Go to Youtube',
        target: `https://www.youtube.com/`,
        icon: 'home',
        type: 'active',
    }, {
        name: 'Sign Up Now',
        target: `https://www.google.bg/`,
        icon: 'home',
        type: 'active',
    }, {
        name: 'Sign In',
        target: `https://www.google.bg/`,
        icon: 'home',
        type: 'active',
    }];

    return Link.insertMany(data);
};

module.exports = seedLniks;

