const data = (Model) => {
    const getAll = () => {
        return Model.find().exec();
    };

    const getById = (id) => {
        return Model.findById(id).exec();
    };

    const create = async (obj) => {
        // const user = new Model(obj);
        return Model.create(obj);
    };

    const update = (id, query) => {
        return Model.findByIdAndUpdate(id, query).exec();
    };

    const remove = (id) => {
        return Model.findByIdAndUpdate(id, {
            isDeleted: true,
        }).exec();
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
