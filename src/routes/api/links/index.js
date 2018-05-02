const express = require('express');
const {
    Router,
} = express;

const linksRoutes = require('./link.routes');
const {
    LinkService,
} = require('../../../services');

const router = new Router();

Object.values(linksRoutes).forEach((route) => {
    router[route.method](
        route.path,
        route.handler({
            LinkService,
        }));
});


module.exports = router;
