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

    passport.authenticate('jwt', {
        session: false,
    }, (err, user, authError) => {
        for (const endpoint of publicEndpoints) {
            if (req.path.toLocaleLowerCase().includes(endpoint.toLocaleLowerCase())) {

                return next();
            }
        }
        // console.log(user);
        req.user = user;
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
        destination: function(req, file, cb) {
            cb(null, path.join(__dirname, '../uploads/'));
        },
        filename: async function(req, file, cb) {
            const hash = await generateFilenameHash(file);

            cb(null, hash);
        },
    });

    const upload = multer({
        storage: storage,
    });

    const uploadFields = upload.fields([{
            name: 'cv',
            maxCount: 1,
        },
        {
            name: 'cl',
            maxCount: 1,
        },
    ]);

    return uploadFields;
};

const safeHandler = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (error) {
        res.status(500).json(error.message);
        // next(error.msg, req, res, next);
    }
};

module.exports = {
    safeHandler,
    isAdminMiddleware,
    uploadFileMiddleware,
};
