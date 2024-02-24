const dbConfig = require('../config/db.config.js')
const Sequelize = require ('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    { //host dan dialect dipisah//
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    }
    )

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize,Sequelize) // bisa ditambah model yang lain.
module.exports = db;