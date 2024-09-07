import express from 'express'
import { createProduct, getProductById, getProducts } from '../../controllers/products/products'

const productsRoute = express.Router()

productsRoute.get('/', getProducts)
productsRoute.get('/:id', getProductById)
productsRoute.post('/', createProduct)

export { productsRoute }