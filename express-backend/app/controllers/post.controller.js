const db = require('../../models')

const Post = db.posts
const Op = db.Sequelize.Op

async function create (req, res) {
    if (!req.title) {
        res.status(400).send({
            message: "Content Can not be Empity"
        })
        return
    }
    const response = null

    const post = {
        title: req.title,
        description: req.description,
        published: req.published ? req.published : 0
    }

    try {
        const dbRes = await Post.create(post).then(response)

        return dbRes

    } catch (errors) {
        return errors
    }
}

async function findAll (req, res) {

}

async function findOne (req, res) {

}

async function update (req, res) {

}

async function deleted (req, res) {

}

module.exports = { create }

/*exports.create = (req, res) => {
    if (!req.title) {
        res.status(400).send({
            message: "Content Can not be Empity"
        })
        return
    }

    const post = {
        title: req.title,
        description: req.description,
        published: req.published ? req.published : 0
    }

    try {
        const a = Post.create(post).then((data) => {
            data
        })

        console.log("a", a)

        return a
    } catch (errors) {
        return errors
    }
}*/
