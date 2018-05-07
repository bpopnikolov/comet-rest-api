const {
    middlewares,
} = require('../../../helpers');


module.exports.getAll = {
    method: 'get',
    path: '/links',
    middlewares: [],
    handler: ({
        LinkService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const links = await LinkService.getLinks();
        return res.status(200).json(links);
    }),
};

module.exports.createLink = {
    method: 'post',
    path: '/links',
    middlewares: [],
    handler: ({
        LinkService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const obj = req.body;
        console.log(obj);
        const link = await LinkService.createLink(obj);

        res.status(200).json(link);
    }),
};

module.exports.updateLink = {
    method: 'post',
    path: '/links/update/:id',
    middlewares: [],
    handler: ({
        LinkService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const id = req.params.id;
        const link = req.body;

        const updatedLink = await LinkService.updateLink(id, link);

        res.status(200).json(updatedLink);
    }),
};

module.exports.deleteLink = {
    method: 'delete',
    path: '/links/delete/:id',
    middlewares: [],
    handler: ({
        LinkService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const id = req.params.id;
        console.log('req', id);
        const deleted = await LinkService.deleteLink(id);
        if (deleted) {
            return res.status(200).json(deleted);
        }
        return res.status(400).json({
            err: 'Links was not deleted',
        });
    }),
};
