const categoriesSeed = require('./categories.seed');
const contactsSeed = require('./contacts.seed');
const jobadsSeed = require('./jobads.seed');
const jobApplicationsSeed = require('./jobApplications.seed');
const linksSeed = require('./links.seed');
const usersSeed = require('./users.seed');


const seed = async () => {
    await Promise.all([
        categoriesSeed(),
        contactsSeed(),
        linksSeed(),
        usersSeed(),
    ]);
    await jobadsSeed();
    await jobApplicationsSeed();

    console.log('Seeding Finished');
    return;
};

seed();
