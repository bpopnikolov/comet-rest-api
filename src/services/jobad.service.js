const jobadsService = (data, config) => {
    const getJobAds = async () => {
        const filteredDeletedAds = (await data.jobad.getAll({}, ['category']))
            .filter((x) => !x.deleted);
        return filteredDeletedAds;
    };

    const createJobAd = async (jobAd) => {
        jobAd.usersApplied = [];
        const category = await data.category.getOne({
            name: jobAd.category,
        });

        jobAd.category = category;

        return data.jobad.create(jobAd);
    };

    const updateJobAd = async (id, jobAd) => {
        const category = await data.category.getOne({
            name: jobAd.category,
        });

        jobAd.category = category;

        return data.jobad.update(id, jobAd, ['category']);
    };

    const deleteJobAd = async (id) => {
        const deletedObj = (await data.jobad.remove(id));

        console.log(deletedObj);

        return deletedObj ? deletedObj.deleted : false;
    };

    const getById = async (id) => {
        const jobAd = await data.jobad.getById(id, ['category']);
        console.log(jobAd);
        return jobAd;
    };


    return {
        getJobAds,
        createJobAd,
        updateJobAd,
        deleteJobAd,
        getById,
    };
};

module.exports = jobadsService;
