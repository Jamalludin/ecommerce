import db from '../../models/index.js'

const Post = db.posts
const Op = db.Sequelize.OPEN

async function insert (req, res) {
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

    Post.create(post).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Something When Wrong"
        })
    })
}

async function findAll (req, res) {

}

async function findOne (req, res) {

}

async function update (req, res) {

}

async function deleted (req, res) {

}

export { insert, findAll, findOne, update, deleted }