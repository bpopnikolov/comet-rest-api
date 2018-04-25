/* globals __dirname __filename */
const fs = require('fs');
const path = require('path');
const {
    helpers,
} = require('../helpers');

const services = {};

/** dynamically load all api routes */
fs
    .readdirSync(__dirname)
    .filter((filename) => filename.includes('service'))
    .forEach((filename) => {
        const fileBaseName = helpers.capitalizeFirstLetter(
            path.basename(filename, '.service.js') + 'Service');
        services[fileBaseName] = require(path.join(__dirname, filename));
    });

module.exports = services;
