const dbController = require("../controllers/category.controller")

exports.insertCategories = async function (req) {
    const insertDB = await dbController.create(req)

    return insertDB
}

exports.findAllCategories = async function (req) {
    const findDB = await dbController.findAll(req)

    return findDB
}


exports.findById = async function (req) {
    const findOneDB = await dbController.findOne(req)

    return findOneDB
}

exports.updateCategories = async function (req) {
    const updateDB = await dbController.update(req)

    return updateDB
}

exports.deleteCategories = async function (req) {
    const deleteDB = await dbController.deleted(req)

    return deleteDB
}