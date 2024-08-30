import { Category } from '../../models/category'
import express, { Request, Response } from 'express'
const productsRoute = express.Router()

productsRoute.get('/', (req: Request, res: Response) => {
	const name = req.body.name
	const product = Category.create({ name })
})

export { productsRoute }