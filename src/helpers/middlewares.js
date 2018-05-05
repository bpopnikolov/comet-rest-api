/* globals __dirname, Set*/
const path = require('path');
const passport = require('passport');
const multer = require('multer');

const {
    generateFilenameHash,
} = require('./helpers');
const multerConfig = require('../../config').multer;

const isAdminMiddleware = (req, res, next) => {
    const forbidenEndpoints = new Set(['/applications', '/users']);
    const allowedEndpoints = new Set(['/applications', '/auth']);
    const publicEndpoints = new Set(['/contacts', '/links', '/jobads', '/auth', '/categories']);

    console.log(req.path);
    passport.authenticate('jwt', {
        session: false,
    }, (err, user, authError) => {
        if (req.method === 'GET' && publicEndpoints.has(req.path)) {
            return next();
        }

        if (user) {
            console.log(user.email);
            console.log(user.role);
            if (user.role === 'user') {
                if (req.method === 'GET' && forbidenEndpoints.has(req.path)) {
                    return res.status(401).json('Unauthorized');
                }

                if (req.method === 'GET') {
                    return next();
                }

                if (req.method === 'POST' && allowedEndpoints.has(req.path)) {
                    return next();
                }
            }
        }

        if (user) {
            console.log(user.email);
            if (user.role === 'admin') {
                return next();
            }
        }

        return res.status(401).json('Unauthorized');
    })(req, res, next);

    return null;
};

const uploadFileMiddleware = () => {
    const storage = multer.diskStorage({
        destination: async function(req, file, cb) {
            // console.log(file);
            cb(null, path.join(__dirname, multerConfig.dest, req.user._id));
        },
        filename: async function(req, file, cb) {
            const hash = await generateFilenameHash(file);

            cb(null, hash);
        },
    });

    const upload = multer({
        storage: storage,
    });

    return upload;
};

const safeHandler = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (error) {
        next(error, req, res, next);
    }
};

module.exports = {
    safeHandler,
    isAdminMiddleware,
    uploadFileMiddleware,
};
