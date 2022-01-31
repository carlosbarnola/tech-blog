const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "This is a comment"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Awesome!"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "I found this amaizing"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "Wow!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "This is another comment"
    }    
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;