const categories = require('../models/category.model');

module.exports = (sequelize, Sequelize) => {

    const Product = sequelize.define("product", {
        kode: {
            type: Sequelize.STRING
        },
        nama: {
            type: Sequelize.STRING
        },
        harga: {
            type: Sequelize.INTEGER
        },
        is_ready: {
            type: Sequelize.BOOLEAN
        },
        gambar: {
            type: Sequelize.STRING
        },
        id_category: {
            type: Sequelize.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        }
    })

    return Product
}