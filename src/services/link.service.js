const linkService = (data, config) => {
    const getLinks = () => {
        return data.link.getAll();
    };

    return {
        getLinks,
    };
};

module.exports = linkService;
