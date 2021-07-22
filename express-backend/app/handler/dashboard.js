const dbControllerProducts = require("../controllers/products.controller")
const dbControllerCategories = require("../controllers/category.controller")
const _ = require("lodash")

exports.findAllProductsAndCategories = async function (req, res) {
    let findDbProducts

    if (_.isEmpty(req.query)) {
        findDbProducts = await dbControllerProducts.findPrductsJoin()
    } else {
        findDbProducts = await dbControllerProducts.findPrductsJoinQuery(req)
    }

    const findDbCategories = await dbControllerCategories.findAll(req)

    res.status(200).json({
        statusCode: '00',
        message: 'SUCCESS_FIND',
        categories: findDbCategories,
        products: findDbProducts
    })
}