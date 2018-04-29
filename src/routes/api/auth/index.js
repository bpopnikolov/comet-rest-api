const express = require('express');
const {
    Router,
} = express;
const userRoutes = require('./auth.routes');
const {
    UserService,
    JwtService,
} = require('../../../services');

const router = new Router();

Object.values(userRoutes).forEach((route) => {
    router[route.method](
        route.path,
        ...route.middlewares,
        route.handler({
            UserService,
            JwtService,
        }));
});


module.exports = router;
