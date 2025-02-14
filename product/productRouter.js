import { Router } from 'express'
import {
  createProduct,
  deleteProduct,
  fetchProduct,
  fetchProductById,
  updateProduct,
} from './productController.js'
const productRouter = Router()

productRouter.post('/', createProduct)
productRouter.get('/', fetchProduct)
productRouter.get('/:id', fetchProductById)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter
