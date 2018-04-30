const {
    helpers,
} = require('../../../helpers');

module.exports.getAll = {
    method: 'get',
    path: '/links',
    middlewares: [],
    handler: ({
        LinkService,
    }) => helpers.safeHandler(async (req, res, next) => {
        console.log('before links get');
        console.log(LinkService);
        const links = await LinkService.getLinks();
        console.log('in route');
        return res.status(200).json(links);
    }),
};
