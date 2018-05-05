const {
    middlewares,
} = require('../../../helpers');


module.exports.getAll = {
    method: 'get',
    path: '/jobads',
    middlewares: [],
    handler: ({
        JobadService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const jobads = await JobadService.getJobAds();
        return res.status(200).json(jobads);
    }),
};

module.exports.create = {
    method: 'post',
    path: '/jobads',
    middlewares: [],
    handler: ({
        JobadService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const jobAd = req.body;
        const createdAd = await JobadService.createJobAd(jobAd);

        if (createdAd) {
            return res.status(200).json(createdAd);
        }
        return res.status(400).json({
            err: 'Jobad was not craeted.',
        });
    }),
};

module.exports.updateJobAd = {
    method: 'post',
    path: '/jobads/update/:id',
    middlewares: [],
    handler: ({
        JobadService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const jobAd = req.body;
        const id = req.params.id;

        if (jobAd._id) {
            delete jobAd._id;
        }

        const updatedAd = await JobadService.updateJobAd(id, jobAd);
        if (updatedAd) {
            return res.status(200).json(updatedAd);
        }
        return res.status(400).json({
            err: 'JobAd was not updated',
        });
    }),
};

module.exports.deleteJobAd = {
    method: 'delete',
    path: '/jobads/delete/:id',
    middlewares: [],
    handler: ({
        JobadService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const id = req.params.id;
        console.log('req', id);
        const deleted = await JobadService.deleteJobAd(id);
        if (deleted) {
            return res.status(200).json(deleted);
        }
        return res.status(400).json({
            err: 'JobAd was not deleted',
        });
    }),
};
