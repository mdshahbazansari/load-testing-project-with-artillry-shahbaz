import mongoose, { Schema, model } from 'mongoose'

const productSchema = new Schema({
  title: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const ProductSchema = model('Product', productSchema)
export default ProductSchema
