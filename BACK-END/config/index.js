require('dotenv').config()

module.exports = {
    SERVER_PORT : process.env.SERVER_PORT,
    DB_URI: process.env.DB_URI,
    SECRET_TOKEN: process.env.SECRET_TOKEN
}