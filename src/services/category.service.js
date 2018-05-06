const categoryService = (data, config) => {
    const getCategories = async () => {
        const filteredDeletedCategories = (await data.category.getAll())
            .filter((x) => !x.deleted);
        return filteredDeletedCategories;
    };

    return {
        getCategories,
    };
};

module.exports = categoryService;
