const express = require('express');
const {
    Router,
} = express;

const jobadsRoutes = require('./jobad.routes');
const {
    JobadService,
} = require('../../../services');


const router = new Router();

const {
    middlewares,
} = require('../../../helpers');

Object.values(jobadsRoutes).forEach((route) => {
    router[route.method](
        route.path, [middlewares.isAdminMiddleware],
        route.handler({
            JobadService,
        }));
});


module.exports = router;
