const dbController = require("../controllers/category.controller")

exports.insertCategories = async function (req, res) {
    const insertDB = await dbController.create(req)

    res.status(200).json({
        statusCode: '00',
        message: 'SUCCESS_CREATED',
        data: insertDB
    })
}

exports.findAllCategories = async function (req, res) {
    const findDB = await dbController.findAll(req)

    res.status(200).json({
        statusCode: '00',
        message: 'SUCCESS',
        data: findDB
    })
}

exports.findById = async function (req, res) {
    const findOneDB = await dbController.findOne(req)

    res.status(200).json({
        statusCode: '00',
        message: 'SUCCESS',
        data: findOneDB
    })
}

exports.updateCategories = async function (req, res) {
    const updateDB = await dbController.update(req)

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

exports.deleteCategories = async function (req, res) {
    const deleteDB = await dbController.deleted(req)

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