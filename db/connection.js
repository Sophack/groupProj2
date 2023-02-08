const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: ${PORT},
    }
)

module.exports = sequelize;

// need to set port to be default port for user 