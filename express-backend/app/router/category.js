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
            await categories.insertCategories(body, res)

        } catch (errors) {

            next(errors)
        }
    }
})

router.get('/all-categories', async (req, res, next) => {

    try {
        await categories.findAllCategories(req, res)

    } catch (errors) {

        next(errors)
    }
})

router.get('/:id', async (req, res, next) => {

    try {
        await categories.findById(req, res)

    } catch (errors) {

        next(errors)
    }
})

router.put('/update-categories/:id', async (req, res, next) => {

    try {
        await categories.updateCategories(req, res)

    } catch (errors) {

        next(errors)
    }
})

router.delete('/:id', async (req, res, next) => {

    try {
        await categories.deleteCategories(req, res)

    } catch (errors) {
        next(errors)
    }
})

module.exports = router