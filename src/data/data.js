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
    applicationData: data(Application),
    categoryData: data(Category),
    contactData: data(Contact),
    jobAdData: data(JobAd),
    linkData: data(Link),
    userData: data(User),
};
