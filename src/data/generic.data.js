const data = (Model) => {
    const getAll = () => {
        return Model.find();
    };

    const getById = (id) => {
        return Model.findById(id);
    };

    const create = async (obj) => {
        return Model.create(obj);
    };

    const update = (id, query) => {
        return Model.findByIdAndUpdate(id, query, {
            'new': true,
        });
    };

    const remove = (id) => {
        return Model.findByIdAndUpdate(id, {
            isDeleted: true,
        }, {
            'new': true,
        });
    };

    const getOne = (options) => {
        return Model.findOne(options);
    };

    return {
        getAll,
        getById,
        getOne,
        create,
        update,
        remove,
    };
};

module.exports = data;
