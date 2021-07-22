const db = require('../../models')
const Sequelize = require('sequelize')

const categories = db.categories
const Op = Sequelize.Op

exports.create = (req) => {

    const result = null

    const values = {
        categories: req.categories,
        descriptions: req.descriptions
    }

   return categories.create(values).then(result).catch((err) => {return err})
}

exports.findAll = (req) => {

    /*const categories = req.query.categories
    let conditions = categories ? {categories: {[Op.like]: `'%${categories}%'`}} : null*/

    const result = null

    return categories.findAll({where: {is_deleted: false}}).then(result).catch((err) => {return err})
}

exports.findOne = (req) => {
    let id = req.params.id
    let result = null

    return categories.findByPk(id).then(result).catch((err) => {return err})
}

exports.update = (req) => {
    let id = req.params.id
    let result = null

    return categories.update(req.body, {where: {id:id}}).then(result).catch((err) => {return err})
}


exports.deleted = (req) => {
    let id = req.params.id
    let result = null

    return categories.destroy({where: {id:id}}).then(result).catch((err) => {return err})
}
