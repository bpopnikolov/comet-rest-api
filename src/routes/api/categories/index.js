const express = require('express');
const {
    Router,
} = express;

const categoriesRoutes = require('./category.routes');
const {
    CategoryService,
} = require('../../../services');

const router = new Router();

Object.values(categoriesRoutes).forEach((route) => {
    router[route.method](
        route.path,
        route.handler({
            CategoryService,
        }));
});


module.exports = router;
