const categoryService = (data, config) => {
    const getCategories = async () => {
        const allCategories = await data.category.getAll();
        return allCategories;
    }

    return {
        getCategories,
    };
};

module.exports = categoryService;
