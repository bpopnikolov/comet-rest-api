const express = require('express');
const {
    Router,
} = express;
const passport = require('passport');

const requireToken = passport.authenticate('jwt', {
    session: false,
});

const linkRoutes = require('./link.routes');
const {
    LinkService,
} = require('../../../services');

const router = new Router();

Object.values(linkRoutes).forEach((route) => {
    router[route.method](
        route.path,
        [requireToken],
        route.handler({
            LinkService,
        }));
});


module.exports = router;
