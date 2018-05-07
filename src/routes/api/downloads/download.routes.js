const {
    middlewares,
} = require('../../../helpers');


module.exports.downloadFile = {
    method: 'get',
    path: '/downloads/:fileName',
    middlewares: [],
    handler: ({
        DownloadService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const fileName = req.params.fileName;
        console.log(fileName);
        const filePath = await DownloadService.getFilePath(fileName);

        res.download(filePath, fileName);
    }),
};
