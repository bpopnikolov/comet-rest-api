const {
    Application,
    Category,
    Contact,
    JobAd,
    Link,
    User,
} = require('../models');

const data = require('./generic.data');

module.exports = {
    application: data(Application),
    category: data(Category),
    contact: data(Contact),
    jobAd: data(JobAd),
    link: data(Link),
    user: data(User),
};
