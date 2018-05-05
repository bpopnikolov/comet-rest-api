const {
    middlewares,
} = require('../../../helpers');

module.exports.getAll = {
    method: 'get',
    path: '/applications',
    middlewares: [],
    handler: ({
        JobApplicationService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const applications = await JobApplicationService.getJobApplications();
        res.status(200).json(applications);
    }),
};

module.exports.createApplication = {
    method: 'post',
    path: '/applications',
    middlewares: [],
    handler: ({
        JobApplicationService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const obj = req.body;
        console.log(obj);
        const application = await JobApplicationService.createJobApplication(obj);
        console.log(application);
        res.status(200).json(application);
    }),
};


module.exports.deleteContact = {
    method: 'delete',
    path: '/applications/delete/:id',
    middlewares: [],
    handler: ({
        JobApplicationService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const id = req.params.id;
        console.log('req', id);
        const deleted = await JobApplicationService.deleteContact(id);
        if (deleted) {
            return res.status(200).json(deleted);
        }
        return res.status(400).json({
            err: 'Application was not deleted',
        });
    }),
};
