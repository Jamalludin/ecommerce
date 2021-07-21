const dbControllerProducts = require("../controllers/products.controller")
const dbControllerCategories = require("../controllers/category.controller")

exports.findAllProductsAndCategories = async function (req, res) {
    const findDbProducts = await dbControllerProducts.findPrductsJoin(req)
    const findDbCategories = await dbControllerCategories.findAll(req)

    res.status(200).json({
        statusCode: '00',
        message: 'SUCCESS_FIND',
        categories: findDbCategories,
        products: findDbProducts
    })
}