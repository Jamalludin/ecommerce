const dataBases = require("../controllers/products.controller")

exports.listProducts = async function (req) {

    const findDB = await dataBases.findAll(req)

    return findDB
}

exports.detailProduct = async function (req) {

    const findOneDB = await dataBases.findOne(req)

    return findOneDB
}

exports.insertProducts = async function (req) {

    const responseDB = await dataBases.create(req)

    return responseDB
}

exports.updateProduct = async function (req) {
    const updateDB = await dataBases.update(req)

    return updateDB
}

exports.deleteProduct = async function (req) {
    const deleteDB = await dataBases.deleted(req)

    return deleteDB
}
