import ProductSchema from './productSchema.js'

export const createProduct = async (req, res) => {
  try {
    const product = new ProductSchema(req.body)
    await product.save()
    res.json(product)
  } catch (error) {
    res.json(error.message)
  }
}

export const fetchProduct = async (req, res) => {
  try {
    const product = await ProductSchema.find()
    res.json(product)
  } catch (error) {
    res.json(error.message)
  }
}
export const fetchProductById = async (req, res) => {
  try {
    const product = await ProductSchema.findById(req.params.id)
    if (!product) return res.json('not found')
    res.json(product)
  } catch (error) {
    res.json(error.message)
  }
}
export const updateProduct = async (req, res) => {
  try {
    const product = await ProductSchema.findByIdAndUpdate(
      req.params.id,
      req.body
    )
    if (!product) return res.status(404).json('not found')
    res.json(product)
  } catch (error) {
    res.json(error.message)
  }
}
export const deleteProduct = async (req, res) => {
  try {
    const product = await ProductSchema.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json('not found')
    res.json(product)
  } catch (error) {
    res.json(error.message)
  }
}
