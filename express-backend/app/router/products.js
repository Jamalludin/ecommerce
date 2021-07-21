const express = require("express")
const products = require('../handler/products')
const Joi = require("joi")
const config = require("../../config")
const multer = require('multer')

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${config.uploadDestination}`)
    },
    filename: function (req, file, cb) {
        cb(null, "MK-" + file.originalname)
    }
})

const upload = multer({storage: storage})

const validationInsertSchema = Joi.object({
    kode: Joi.string().required(),
    id_category: Joi.number().required(),
    nama: Joi.string().required(),
    harga: Joi.number().required(),
    is_ready: Joi.boolean().required(),
    gambar: Joi.any().optional()

})

router.get('/', async (req, res, next) => {
    const { headers, body, query, params } = req

    console.log("Begin ", { headers, body, query, params })

    try {
        const resSuccess = await products.listProducts(req)
        console.log('ress', resSuccess)

        res.status(200).json(resSuccess)

    } catch (errors) {
        next(errors)
    }
})

router.get('/:id', async (req, res, next) => {
    const { headers, body, query, params } = req

    console.log("Begin ", { headers, body, query, params })

    try {
        const resSuccess = await products.detailProduct(req)

        res.status(200).json(resSuccess)

    } catch (errors) {
        next(errors)
    }
})

router.post('/add-product', upload.single('gambar'), async (req, res, next) => {
    const { headers, body, query, params } = req

    console.log("Begin ", { headers, body, query, params })

    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }

    const {error, value} = validationInsertSchema.validate(req.body, options)

    if (error) {
        res.status(422).json({
            statusCode: '0022',
            message: 'INVALID_REQUEST',
            data: `${error.details.map(x => x.message).join(', ')}`
        })
    } else {
        try {
            const resSuccess = await products.insertProducts(req)
            console.log("data", resSuccess)
            res.status(200).json(resSuccess)

        } catch (errors) {
            next(errors)
        }
    }
})

router.put('/update-product/:id', upload.single('gambar'), async (req, res, next) => {

    const { headers, body, query, params } = req

    console.log("Begin ", { headers, body, query, params })

    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }

    const {error, value} = validationInsertSchema.validate(req.body, options)

    if (error) {
        res.status(422).json({
            statusCode: '0022',
            message: 'INVALID_REQUEST',
            data: `${error.details.map(x => x.message).join(', ')}`
        })
    } else {
        try {
            const updateDB = await products.updateProduct(req)

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
    }
})

router.delete('/:id', async (req, res, next) => {

    try {
        const deleteDB = await products.deleteProduct(req)

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