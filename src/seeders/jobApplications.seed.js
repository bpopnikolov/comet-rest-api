const mongoose = require('mongoose');

const {
    Application,
    User,
    JobAd,
} = require('../models');
const config = require('../../config');

mongoose.connect(config.db.mongo.uri);

const seedApplications = async () => {
    const users = await User.find();
    const jobAds = await JobAd.find();

    // console.log(users);

    const data = [{
            firstname: 'Fiki',
            lastname: 'Storaro',
            comment: `Fiki IpsumFiki IpsumFiki IpsumFiki IpsumFiki Ipsum`,
            cv: '/uploads/fiki/na_fiki_cv-to.pdf',
            cl: '/uploads/fiki/na_fiki_cl.pdf',
            user: users.find((x) => x.email === 'fiki1@comet.com'),
            jobAd: jobAds.find((x) => x.title === 'chalga_boK'),
        },
        {
            firstname: 'Galin',
            lastname: 'Faraona',
            comment: `Na egipet faraona.`,
            cv: '/uploads/galin/na_galin_cv-to.pdf',
            cl: '/uploads/galin/na_galin_cl.pdf',
            user: users.find((x) => x.email === 'galin1@comet.com'),
            jobAd: jobAds.find((x) => x.title === 'chalga_boK'),
        },
        {
            firstname: 'Galena',
            lastname: 'Mamito',
            comment: `Mouro mou se thelo!`,
            cv: '/uploads/galena/na_galena_cv-to.pdf',
            cl: '/uploads/galena/na_galena_cl.pdf',
            user: users.find((x) => x.email === 'galenaenomer1@comet.com'),
            jobAd: jobAds.find((x) => x.title === 'chalga_queen'),
        },
        {
            firstname: 'Dzhena',
            lastname: 'NqmaLastname',
            comment: `Spri da mi dosajdash`,
            cv: '/uploads/dzhena/na_dzhena_cv-to.pdf',
            cl: '/uploads/dzhena/na_dzhena_cl.pdf',
            user: users.find((x) => x.email === 'dzhenajs1@comet.com'),
            jobAd: jobAds.find((x) => x.title === 'chalga_queen'),
        }, {
            firstname: 'AzisEdno',
            lastname: 'AzisDve',
            comment: `She we vodq na Mikonos!`,
            cv: '/uploads/azis/na_azis_cv-to.pdf',
            cl: '/uploads/azis/na_azis_cl.pdf',
            user: users.find((x) => x.email === 'azis1@comet.com'),
            jobAd: jobAds.find((x) => x.title === 'chalga_boK'),
        },
    ];

    const apps = await Application.insertMany(data);


    const updatedJobs = Promise.all(jobAds.map((job) => {
        const jobApps = apps.filter((x) => x.jobAd._id === job._id);
        jobApps.forEach((app) => {
            job.usersApplied.push({
                user: app.user,
                application: app._id,
            });
        });

        return job.save();
    }));

    const updatedUsers = Promise.all(users.map((user) => {
        const userApps = apps.filter((x) => x.user._id === user._id);

        const appsToAdd = [];
        userApps.forEach((app) => {
            appsToAdd.push({
                jobAd: app.jobAd,
                application: app._id,
            });
        });

        return User.update({
            _id: user._id,
        }, {
            $set: {
                jobsApplied: appsToAdd,
            },
        });
    }));

    await Promise.all([updatedJobs, updatedUsers]);
    console.log('all updated');

    return apps;
};

seedApplications();
module.exports = seedApplications;
