const contactsService = (data, config) => {
    const getContacts = () => {
        return data.contact.getAll();
    };

    return {
        getContacts,
    };
};

module.exports = contactsService;
