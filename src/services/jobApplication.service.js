const jobApplicationService = (data, config) => {
    const getJobApplications = async () => {
        const filteredDeletedApps = (await data.application.getAll({}))
            .filter((x) => !x.deleted);
        return filteredDeletedApps;
    };

    const createJobApplication = async (application) => {

    };

    const deleteJobApplication = async (id) => {
        const deletedObj = (await data.application.remove(id));

        return deletedObj ? deletedObj.deleted : false;
    };

    return {
        getJobApplications,
        createJobApplication,
        deleteJobApplication,
    };
};

module.exports = jobApplicationService;
