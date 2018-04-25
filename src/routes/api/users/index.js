const express = require('express');
const {
    Router,
} = express;
const userRoutes = require('./user.routes');
const {
    UserService,
} = require('../../../services');

const router = new Router();

Object.values(userRoutes).forEach((route) => {
    router[route.method](route.path, route.handler(UserService));
});


module.exports = router;
