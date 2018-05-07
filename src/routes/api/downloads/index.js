const express = require('express');
const {
    Router,
} = express;

const downloadRoutes = require('./download.routes');
const {
    DownloadService,
} = require('../../../services');

const {
    middlewares,
} = require('../../../helpers');

const router = new Router();

Object.values(downloadRoutes).forEach((route) => {
    router[route.method](
        route.path, [middlewares.isAdminMiddleware],
        route.handler({
            DownloadService,
        }));
});


module.exports = router;
