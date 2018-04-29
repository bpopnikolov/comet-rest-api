const mongoose = require('mongoose');

const {
    User,
} = require('../models');
const config = require('../../config');

mongoose.connect(config.db.mongo.uri);

const seedUsers = async () => {
    const data = [{
        email: 'admin1@comet.com',
        password: 'admin1@Comet',
        role: 'admin',
        jobApplied: [],
    }, {
        email: 'user1@comet.com',
        password: 'user1@Comet',
        jobApplied: [],
    }, {
        email: 'user2@comet.com',
        password: 'user2@Comet',
        jobApplied: [],
    }, {
        email: 'user3@comet.com',
        password: 'user3@Comet',
        jobApplied: [],
    }, {
        email: 'user4@comet.com',
        password: 'user4@Comet',
        jobApplied: [],
    }, {
        email: 'user5@comet.com',
        password: 'user5@Comet',
        jobApplied: [],
    }];

    return await Promise.all(data.map(async (user) => {
        return User.create(user);
    }));
};
seedUsers();

module.exports = seedUsers;
