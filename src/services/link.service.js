const linkService = (data, config) => {
    const getLinks = async () => {
        const filteredDeletedLinks = (await data.link.getAll())
            .filter((x) => !x.deleted);
        return filteredDeletedLinks;
    };

    const createLink = async (link) => {
        return data.link.create(link);
    };

    const updateLink = async (id, link) => {
        return data.link.update(id, link);
    };

    const deleteLink = async (id) => {
        const deletedObj = (await data.link.remove(id));

        return deletedObj ? deletedObj.deleted : false;
    };


    return {
        getLinks,
        createLink,
        updateLink,
        deleteLink,
    };
};

module.exports = linkService;
