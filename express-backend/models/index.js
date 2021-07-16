import dbConfig from "../config/db.js"
import { Sequelize } from "sequelize"
import { createTable } from "./model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: dbConfig.pool
})

const db = {}

db.Sequelize = Sequelize
db.Sequelize = sequelize

db.posts = createTable(sequelize, Sequelize)

export default db