import mongoose from 'mongoose'
mongoose
  .connect('mongodb://localhost:27017/testing')
  .then(() => console.log('connected'))
  .catch(() => console.log('disconnedted'))

import express from 'express'
const app = express()
app.listen(4000)

import morgan from 'morgan'
import bodyParser from 'body-parser'
import productRouter from './product/productRouter.js'

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/product', productRouter)
