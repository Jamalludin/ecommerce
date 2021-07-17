const dataBases = require("../controllers/post.controller")

async function listProducts() {
    return {
        nama: "Jamalludin",
        hobi: "Ngentot"
    }
}

async function detailProduct() {
    return {
        kntl: "testis"
    }
}

async function insertProducts(req, res) {

    const ress = await dataBases.create(req, res)

    console.log("RES", ress)

    return ress
}

module.exports = { listProducts , detailProduct, insertProducts }
