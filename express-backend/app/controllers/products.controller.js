const db = require('../../models')

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

    return Products.findAll().then(result).catch((err) => {return err})
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