const express = require('express');
const {
    Router,
} = express;
const passport = require('passport');

const jobadsRoutes = require('./jobad.routes');
const {
    JobadService,
} = require('../../../services');


const router = new Router();


const isAdminMiddleware = (req, res, next) => {
    if (req.method === 'GET') {
        return next();
    }

    passport.authenticate('jwt', {
        session: false,
    }, (err, user, authError) => {
        console.log('ADMIN MIDDLEWARE');
        if (user) {
            if (user.role === 'admin') {
                console.log('IS ADMIN');
                return next();
            }
        }
        console.log('IS NOT ADMIN');
        return res.status(401).json('Unauthorized');
    })(req, res, next);

    return null;
};

Object.values(jobadsRoutes).forEach((route) => {
    router[route.method](
        route.path, [isAdminMiddleware],
        route.handler({
            JobadService,
        }));
});


module.exports = router;
