const jobApplicationService = (data, config) => {
    const getJobApplications = async () => {
        const filteredDeletedApps = (await data.application.getAll({}, ['jobAd']))
            .filter((x) => !x.deleted);
        return filteredDeletedApps;
    };

    const createJobApplication = async (application) => {

        const user = await data.user.getById(application.user._id);

        const jobAd = await data.jobad.getById(application.jobAd);

        application.user = user;
        application.jobAd = jobAd;

        const savedApplication = await data.application.create(application);
        console.log(savedApplication);

        await data.user.update({
            _id: user._id,
        }, {
            $push: {
                jobsApplied: {
                    jobAd: jobAd._id,
                    application: savedApplication._id,
                },
            },
        });

        await data.jobad.update({
            _id: user._id,
        }, {
            $push: {
                usersApplied: {
                    user: user._id,
                    application: savedApplication._id,
                },
            },
        });

        return savedApplication;
    };

    const deleteJobApplication = async (id) => {
        const application = await data.application.getById(id);
        console.log(application._id);
        const user = await data.user.getById(application.user);
        const jobAd = await data.jobad.getById(application.jobAd);

        console.log(user);
        console.log(jobAd);

        const updatedUserApplications = user.jobsApplied.filter((x) => {
            return !x.application === application._id;
        });

        const updatedJobApplications = jobAd.usersApplied.filter((x) => {
            return !x.application === application._id;
        });

        console.log(updatedUserApplications);
        console.log(updatedJobApplications);

        await Promise.all([data.user.update({
                _id: user._id,
            }, {
                $set: {
                    jobsApplied: updatedUserApplications,
                },
            }),
            data.jobad.update({
                _id: jobAd._id,
            }, {
                $set: {
                    usersApplied: updatedJobApplications,
                },
            }),
        ]);

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
