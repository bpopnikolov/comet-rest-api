/* globals __dirname __filename */
const fs = require('fs');
const path = require('path');

const models = {};

/** dynamically load all api routes */
fs.readdirSync(__dirname)
    .filter((filename) => filename !== path.basename(__filename))
    .filter((filename) => filename !== 'index.js')
    // relative to absolute path
    .forEach((filename) => {
        models[filename] = require(path.join(__dirname, filename));
    });

    console.log(models);
module.exports = models;
