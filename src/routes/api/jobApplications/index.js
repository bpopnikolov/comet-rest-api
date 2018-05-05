const express = require('express');
const {
    Router,
} = express;

const jobApplicationRoutes = require('./jobApplication.routes');
const {
    JobApplicationService,
} = require('../../../services');

const {
    middlewares,
} = require('../../../helpers');

const router = new Router();

Object.values(jobApplicationRoutes).forEach((route) => {
    router[route.method](
        route.path, [middlewares.isAdminMiddleware],
        route.handler({
            JobApplicationService,
        }));
});


module.exports = router;
