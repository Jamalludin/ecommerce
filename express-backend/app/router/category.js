const express = require("express")
const Joi = require('joi')
const router = express.Router()

const categories = require('../handler/category')

const validationSchema = Joi.object({
    categories: Joi.string().required(),
    descriptions: Joi.string().required()

})

router.post('/add-categories', async (req, res, next) => {

    const {headers, body, query, params} = req

    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }

    const {error, value} = validationSchema.validate(req.body, options)

    if (error) {
        res.status(422).json({
            statusCode: '0022',
            message: 'INVALID_REQUEST',
            data: `${error.details.map(x => x.message).join(', ')}`
        })
    } else {

        try {
            const insertDB = await categories.insertCategories(body)

            res.status(200).json({
                statusCode: '00',
                message: 'SUCCESS_CREATED',
                data: insertDB
            })

        } catch (errors) {

            next(errors)
        }
    }
})

router.get('/all-categories', async (req, res, next) => {

    try {
        const findDB = await categories.findAllCategories(req)

        res.status(200).json({
            statusCode: '00',
            message: 'SUCCESS',
            data: findDB
        })

    } catch (errors) {

        next(errors)
    }
})

router.get('/:id', async (req, res, next) => {

    try {
        const findDB = await categories.findById(req)

        res.status(200).json({
            statusCode: '00',
            message: 'SUCCESS',
            data: findDB
        })

    } catch (errors) {

        next(errors)
    }
})

router.put('/update-categories/:id', async (req, res, next) => {

    try {
        const updateDB = await categories.updateCategories(req)

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

    } catch (errors) {

        next(errors)
    }
})

router.delete('/:id', async (req, res, next) => {

    try {
        const deleteDB = await categories.deleteCategories(req)

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

    } catch (errors) {
        next(errors)
    }
})

module.exports = router