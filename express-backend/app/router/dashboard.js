const express = require("express")
const router = express.Router()

const dashboard = require('../handler/dashboard')

router.get('/*', async (req, res, next) => {

    const {headers, body, query, params} = req

    try {
        await dashboard.findAllProductsAndCategories(req, res)

    } catch (errors) {

        next(errors)
    }
})

module.exports = router