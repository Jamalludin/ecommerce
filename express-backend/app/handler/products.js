const dataBases = require("../controllers/products.controller")

exports.listProducts = async function (req, res) {

    const findDB = await dataBases.findAll(req)

    res.status(200).json(findDB)
}

exports.detailProduct = async function (req, res) {

    const findOneDB = await dataBases.findOne(req)

    res.status(200).json(findOneDB)
}

exports.insertProducts = async function (req, res) {

    const responseDB = await dataBases.create(req)

    res.status(200).json(responseDB)
}

exports.updateProduct = async function (req, res) {
    const updateDB = await dataBases.update(req)

    if (updateDB == 1) {
        res.status(200).json({
            statusCode: '00',
            message: 'SUCCESS_UPDATED'
        })
    } else {
        res.status(422).json({
            statusCode: '00422',
            message: 'FAILED_UPDATED_DATA'
        })
    }
}

exports.deleteProduct = async function (req, res) {
    const deleteDB = await dataBases.deleted(req)

    if (deleteDB == 1) {
        res.status(200).json({
            statusCode: '00',
            message: 'SUCCESS_DELETED'
        })
    } else {
        res.status(422).json({
            statusCode: '00422',
            message: `failed deleted file id : ${req.params.id}`
        })
    }
}
