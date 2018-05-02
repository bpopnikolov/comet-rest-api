const mongoose = require('mongoose');

const {
    JobAd,
    Category,
} = require('../models');
const config = require('../../config');

mongoose.connect(config.db.mongo.uri);


const jobadsLinks = async () => {

    const allCategories = await Category.find();

    const data = [{
            title: 'Mean Stack Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Full Stack Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'JS Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Front-End Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Back-end Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: '.NET Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Python Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Scala Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Haskel Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'C++ Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'JAVA Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'C# Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Lua Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Kotlin Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Rust Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Groovy Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Gosu Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Swift Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Clojure Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'F# Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'OCaml Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'TypeScript Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'NodeJS Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'R Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
        {
            title: 'Lisp Developer',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus rhoncus, tincidunt diam nec, cursus dui. Etiam ultrices dapibus magna. Phasellus ac mi nec massa rhoncus commodo. Morbi auctor ex mauris, non dapibus eros vehicula vitae. Etiam ac libero purus. Duis ac nunc ultricies, porta nibh in, dictum orci. Praesent non magna sollicitudin, mattis sem vel, suscipit massa. Nullam tempus dolor non urna iaculis, a venenatis justo posuere. Maecenas id quam sed leo pharetra ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            category: allCategories.find((x) => x.name === 'IT'),
            userApplied: [],
        },
    ];

    return await JobAd.insertMany(data);
};

jobadsLinks();
module.exports = jobadsLinks;
