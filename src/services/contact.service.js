const contactsService = (data, config) => {
    const getContacts = async () => {
        const filteredDeletedContacts = (await data.contact.getAll())
            .filter((x) => !x.deleted);
        return filteredDeletedContacts;
    };

    const createContact = async (contact) => {
        return data.contact.create(contact);
    };

    const updateContact = async (id, contact) => {
        return data.contact.update(id, contact);
    };

    const deleteContact = async (id) => {
        const deletedObj = (await data.contact.remove(id));

        return deletedObj ? deletedObj.deleted : false;
    };

    return {
        getContacts,
        createContact,
        updateContact,
        deleteContact,
    };
};

module.exports = contactsService;
