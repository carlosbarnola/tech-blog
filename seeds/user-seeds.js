const { User } = require('../models');

const userData = [
    {
        username: "carlosrojas",
        email: "carlos@gw.com",
        password: "carlos1"
    },
    {
        username: "joycesmith",
        email: "joyce@gw.com",
        password: "joyce1"
    },
    {
        username: "paulsmith",
        email: "paul@gw.com",
        password: "paul1"
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;