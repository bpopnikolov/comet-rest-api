const express = require('express');
const {
    Router,
} = express;
const userRoutes = require('./routes');
const services = require('./services');

const router = new Router();


Object.values(userRoutes).forEach((route) => {
    router[route.method](route.path, route.handler(services));
});

// router.use('/api/users', router);

module.exports = router;
