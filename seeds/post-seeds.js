const { Post } = require('../models');

const postData = [{
        title: 'Blog post title',
        content: 'Example of comments for this user',
        user_id: 1

    },
    {
        title: 'Blog post title',
        content: 'Example of comments for this user',
        user_id: 2
    },
    {
        title: 'Blog post title',
        content: 'Example of comments for this user',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;