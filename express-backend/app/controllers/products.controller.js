const db = require('../../models')
const { QueryTypes } = require('sequelize');

const Products = db.products
const Op = db.Sequelize.Op

exports.create = (req) => {

    const result = null

    const post = {
        kode: req.body.kode,
        id_category: req.body.id_category,
        nama: req.body.nama,
        harga: req.body.harga,
        is_ready: req.body.is_ready,
        gambar: req.file.path
    }

    return Products.create(post).then(result).catch((err) => {return err})
}

exports.findAll = (req) => {
    const result = null

    return Products.findAll({where: {is_deleted: false}}).then(result).catch((err) => {return err})
}

exports.findOne = (req) => {
    let id = req.params.id
    let result = null

    return Products.findByPk(id).then(result).catch((err) => {return err})
}

exports.update = (req) => {
    let id = req.params.id
    let result = null

    const update = {
        kode: req.body.kode,
        id_category: req.body.id_category,
        nama: req.body.nama,
        harga: req.body.harga,
        is_ready: req.body.is_ready,
        gambar: req.file.path
    }

    return Products.update(update, {where: {id:id}}).then(result).catch((err) => {return err})
}

exports.deleted = (req) => {
    let id = req.params.id
    let result = null

    return Products.destroy({where: {id:id}}).then(result).catch((err) => {return err})
}

exports.findPrductsJoin = () => {
    const result = db.Sequelize.query(
        `SELECT 
         products.id, products.kode, products.nama, products.harga, products.is_ready, products.gambar, 
         products.createdAt, products.updatedAt, categories.id AS id_category, 
         categories.categories 
         FROM products 
         INNER JOIN categories ON products.id_category = categories.id`, { type: QueryTypes.SELECT });

    return result
}

exports.findPrductsJoinQuery = (req) => {
    const result = db.Sequelize.query(
        `SELECT 
         products.id, products.kode, products.nama, products.harga, products.is_ready, products.gambar, 
         products.createdAt, products.updatedAt, categories.id AS id_category, 
         categories.categories 
         FROM products 
         INNER JOIN categories ON products.id_category = categories.id 
         WHERE id_category = ${req.query.id}`, { type: QueryTypes.SELECT });

    return result
}