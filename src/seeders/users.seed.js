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
            jobsApplied: [],
        }, {
            email: 'user1@comet.com',
            password: 'user1@Comet',
            jobsApplied: [],
        }, {
            email: 'user2@comet.com',
            password: 'user2@Comet',
            jobsApplied: [],
        }, {
            email: 'user3@comet.com',
            password: 'user3@Comet',
            jobsApplied: [],
        }, {
            email: 'user4@comet.com',
            password: 'user4@Comet',
            jobsApplied: [],
        }, {
            email: 'user5@comet.com',
            password: 'user5@Comet',
            jobsApplied: [],
        }, {
            email: 'fiki1@comet.com',
            password: 'fiki1@Comet',
            jobsApplied: [],
        }, {
            email: 'galin1@comet.com',
            password: 'galin1@Comet',
            jobsApplied: [],
        }, {
            email: 'izdislav1@comet.com',
            password: 'izdislav1@Comet',
            jobsApplied: [],
        },
        {
            email: 'galenaenomer1@comet.com',
            password: 'galenaenomer1@Comet',
            jobsApplied: [],
        }, {
            email: 'dzhenajs1@comet.com',
            password: 'dzhenajs1@Comet',
            jobsApplied: [],
        },
        {
            email: 'azis1@comet.com',
            password: 'azis1@Comet',
            jobsApplied: [],
        },
    ];

    return await Promise.all(data.map(async (user) => {
        return User.create(user);
    }));
};
seedUsers();

module.exports = seedUsers;
