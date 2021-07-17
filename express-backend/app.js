const express  = require ('express')
const createError  = require ('http-errors')
const cookieParser  = require ('cookie-parser')
const cors  = require ('cors')
const logger  = require ('morgan')
const dotenv  = require ('dotenv')

const db  = require ('./models')

const indexRouter  = require ('./app/router')
const categoriesRouter  = require ('./app/router/category')
const productsRouter  = require ('./app/router/products')

dotenv.config()

const app = express()
app.use(logger(process.env.NODE_ENV||'dev'))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(cookieParser())

db.Sequelize.sync()

let whiteList = [
    'http://localhost:3001'
]

let corsOptions = {
    origin: function (origin, callBack) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callBack(null, true)
        } else {
            callBack(new Error('Not Allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))

app.use('/', indexRouter)
app.use('/api/products', productsRouter)
app.use('/api/categories', categoriesRouter)

app.use(function(req, res, next) {
    return res.status(404).send({ code: 404, message: 'URL_NOT_FOUND' });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
});

module.exports = app