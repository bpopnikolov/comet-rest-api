const data = (Model) => {
    const getAll = (query = {}, populateOptions = []) => {
        return Model.find(query).populate(...populateOptions);
        // return Model.find(query);
    };

    const getById = (id, populateOptions = []) => {
        return Model.findById(id).populate(...populateOptions);
    };

    const create = async (obj, populateOptions = []) => {
        return Model.create(obj);
    };

    const update = (id, query, populateOptions = []) => {
        return Model.findByIdAndUpdate(id, query, {
            'new': true,
        }).populate(...populateOptions);
    };

    const remove = async (id) => {
        const obj = await Model.findById(id);

        return new Promise((resolve, reject) => {
            if (obj) {
                obj.delete(() => {
                    resolve(obj);
                });
            } else {
                reject(null);
            }
        });
    };

    const getOne = (query, populateOptions = []) => {
        return Model.findOne(query).populate(...populateOptions);
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
