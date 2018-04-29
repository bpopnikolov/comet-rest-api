/* globals __dirname */
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('../config');
const {
    passportLocalStrategy,
    passportJWTStrategy,
} = require('./config');

const {
    UserService,
} = require('./services');

// routes

const app = express();

mongoose.connect(config.db.mongo.uri);
const mc = mongoose.connection;
mc.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set routes
require('./routes/api')(app);

// config passport

passport.use(passportLocalStrategy({
    usernameField: 'email',
}, UserService));
passport.use(passportJWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: config.passport.secret,
}, UserService));
app.use(passport.initialize());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
