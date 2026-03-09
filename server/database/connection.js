const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('scoreboard180', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;
