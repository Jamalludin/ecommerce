import { insert} from "../controllers/post.controller.js";

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

    return await insert(req, res)
}

export { listProducts , detailProduct, insertProducts }
