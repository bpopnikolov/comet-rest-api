const mongoose = require('mongoose');

const {
    Link,
} = require('../models');
const config = require('../../config');

mongoose.connect(config.db.mongo.uri);

const seedLinks = async () => {
    const data = [{
            name: 'Google Search',
            target: `https://www.google.bg/`,
            icon: 'home',
            type: 'action',
        }, {
            name: 'Go to Youtube',
            target: `https://www.youtube.com/`,
            icon: 'home',
            type: 'action',
        }, {
            name: 'Sign Up Now',
            target: `https://www.google.bg/`,
            icon: 'home',
            type: 'action',
        }, {
            name: 'facebook',
            target: `https://www.facebook.com/`,
            icon: 'assets/facebook-logo.svg',
            type: 'social',
        }, {
            name: 'twitter',
            target: `https://twitter.com/`,
            icon: 'assets/twitter-logo.svg',
            type: 'social',
        },
        {
            name: 'google',
            target: `https://www.google.bg/`,
            icon: 'assets/google-logo.svg',
            type: 'social',
        },
    ];

    return await Link.insertMany(data);
};

module.exports = seedLinks;
