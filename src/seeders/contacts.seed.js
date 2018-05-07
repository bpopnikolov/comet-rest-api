const mongoose = require('mongoose');

const {
    Contact,
} = require('../models');
const config = require('../../config');

mongoose.connect(config.db.mongo.uri);

const seedContacts = async () => {
    const data = [{
        name: 'Sofia',
        value: '10 Aleksandar Malinov boulevard, Sofia',
        email: 'cometenomer1@comet.com',
        phone: '+359 11 12 34',
        isPrimary: true,
    }, {
        name: 'Plovidiv',
        value: 'Plovdiv Center, Plovdiv',
        email: 'cometenomer1@comet.com',
        phone: '+359 11 12 34',
        isPrimary: true,
    }, {
        name: 'Bansko',
        value: '9 Angel Kanchev 2770 Noviyat Grad, Bansko',
        email: 'cometenomer1@comet.com',
        phone: '+359 11 12 34',
    }, {
        name: 'Knezha',
        value: '53 Dimitar Butanski, Knezha',
        email: 'cometenomer1@comet.com',
        phone: '+359 11 12 34',
    }];

    return await Contact.insertMany(data);
};

seedContacts();
module.exports = seedContacts;
