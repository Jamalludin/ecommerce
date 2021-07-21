const dbConfig  = require ( "../config/db")
const Sequelize  = require ( "sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: dbConfig.pool
})

const db = {}

db.Sequelize = Sequelize
db.Sequelize = sequelize

db.posts = require("./example.model.js")(sequelize, Sequelize)
db.categories = require("./category.model.js")(sequelize, Sequelize)
db.products = require("./product.model.js")(sequelize, Sequelize)

module.exports = db