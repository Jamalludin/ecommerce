const express = require("express")
const router = express.Router()

const dashboard = require('../handler/dashboard')

router.get('/*', async (req, res, next) => {

    const {body, query, params} = req

    console.log("Begin",query)

    try {
        await dashboard.findAllProductsAndCategories(req, res)

    } catch (errors) {

        next(errors)
    }
})

module.exports = router