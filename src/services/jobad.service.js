const jobadsService = (data, config) => {
    const getJobAds = async () => {
        const filteredDeletedAds = (await data.jobad.getAll()).filter((x) => !x.isDeleted);
        return filteredDeletedAds;
    };

    const createJobAd = (jobAd) => {
        jobAd.usersApplied = [];
        return data.jobad.create(jobAd);
    };

    const updateJobAd = (id, jobAd) => {
        return data.jobad.update(id, jobAd);
    };

    const deleteJobAd = async (id) => {
        console.log(id);
        const isDeleted = (await data.jobad.remove(id)).isDeleted;
        return isDeleted;
    };

    return {
        getJobAds,
        createJobAd,
        updateJobAd,
        deleteJobAd,
    };
};

module.exports = jobadsService;
