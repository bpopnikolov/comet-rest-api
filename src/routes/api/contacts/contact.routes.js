const {
    middlewares,
} = require('../../../helpers');

module.exports.getAll = {
    method: 'get',
    path: '/contacts',
    middlewares: [],
    handler: ({
        ContactService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const contacts = await ContactService.getContacts();

        res.status(200).json(contacts);
    }),
};

module.exports.createContact = {
    method: 'post',
    path: '/contacts',
    middlewares: [],
    handler: ({
        ContactService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const obj = req.body;
        console.log(obj);
        const contact = await ContactService.createContact(obj);

        res.status(200).json(contact);
    }),
};

module.exports.updateContact = {
    method: 'post',
    path: '/contacts/update/:id',
    middlewares: [],
    handler: ({
        ContactService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const id = req.params.id;
        const contact = req.body;

        const contacts = await ContactService.updateContact(id, contact);

        res.status(200).json(contacts);
    }),
};

module.exports.deleteContact = {
    method: 'delete',
    path: '/contacts/delete/:id',
    middlewares: [],
    handler: ({
        ContactService,
    }) => middlewares.safeHandler(async (req, res, next) => {
        const id = req.params.id;
        console.log('req', id);
        const deleted = await ContactService.deleteContact(id);
        if (deleted) {
            return res.status(200).json(deleted);
        }
        return res.status(400).json({
            err: 'Contact was not deleted',
        });
    }),
};
