import express, { Request, Response } from 'express'
import { productsRoute } from './products/index'
const router = express.Router()

router.use(express.json())
router.use('/products', productsRoute)

export { router }