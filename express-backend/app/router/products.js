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
        await products.listProducts(req, res)

    } catch (errors) {
        next(errors)
    }
})

router.get('/:id', async (req, res, next) => {
    const { headers, body, query, params } = req

    console.log("Begin ", { headers, body, query, params })

    try {
        await products.detailProduct(req, res)

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
            await products.insertProducts(req, res)

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
            await products.updateProduct(req, res)

        } catch (errors) {

            next(errors)
        }
    }
})

router.delete('/:id', async (req, res, next) => {

    try {
        await products.deleteProduct(req, res)

    } catch (errors) {
        next(errors)
    }
})

module.exports = router