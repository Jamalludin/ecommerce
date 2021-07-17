require('dotenv').config()

const config = {
    HOST: process.env.HOST || "localhost",
    USER: process.env.USER || "root",
    PASSWORD: process.env.PASSWORD || "",
    DB: process.env.DB || "warung-shop",
    DIALECT: process.env.DIALECT || "mysql",
}

module.exports = {
    HOST: config.HOST,
    USER: config.USER,
    PASSWORD: config.PASSWORD,
    DB: config.DB,
    dialect: config.DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}