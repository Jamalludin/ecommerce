const express = require("express")
const { listProducts, detailProduct, insertProducts } = require('../handler/products')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const { headers, body, query, params } = req

    console.log("Begin ", { headers, body, query, params })

    try {
        const resSuccess = await listProducts()

        res.status(200).json(resSuccess)

    } catch (errors) {
        next(errors)
    }
})

router.get('/:productId', async (req, res, next) => {
    const { headers, body, query, params } = req

    console.log("Begin ", { headers, body, query, params })

    try {
        const resSuccess = await detailProduct()

        res.status(200).json(resSuccess)

    } catch (errors) {
        next(errors)
    }
})

router.post('/add-product', async (req, res, next) => {
    const { headers, body, query, params } = req

    console.log("Begin ", { headers, body, query, params })

    try {
        const resSuccess = await insertProducts(req.body, res)
        console.log("data", resSuccess)
        res.status(200).json(resSuccess)

    } catch (errors) {
        next(errors)
    }
})

module.exports = router