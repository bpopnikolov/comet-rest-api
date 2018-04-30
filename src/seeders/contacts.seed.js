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
        isPrimary: true,
    }, {
        name: 'Plovidiv',
        value: 'Plovdiv Center, Plovdiv',
        isPrimary: true,
    }, {
        name: 'Bansko',
        value: '9 Angel Kanchev 2770 Noviyat Grad, Bansko',
    }, {
        name: 'Knezha',
        value: '53 Dimitar Butanski, Knezha',
    }];

    return await Contact.insertMany(data);
};

seedContacts();
module.exports = seedContacts;
