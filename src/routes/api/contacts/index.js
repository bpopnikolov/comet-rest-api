const express = require('express');
const {
    Router,
} = express;

const contactsRoutes = require('./contact.routes');
const {
    ContactService,
} = require('../../../services');

const router = new Router();

Object.values(contactsRoutes).forEach((route) => {
    router[route.method](
        route.path,
        route.handler({
            ContactService,
        }));
});


module.exports = router;
