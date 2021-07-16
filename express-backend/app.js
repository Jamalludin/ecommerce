import express from 'express'
import createError from 'http-errors'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import logger from 'morgan'
import dotenv from 'dotenv'

import db from './models/index.js'

import indexRouter from './app/router/index.js'
import productsRouter from './app/router/products.js'

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

app.use(function(req, res, next) {
    next(createError(404))
})

export default app