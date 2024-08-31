import { Category } from "../../models/category"
import { Request, Response } from 'express'

const createCategories = async (req: Request, res: Response) => {
	try {
		const name = req.body.name
		const category = await Category.create({ name })
		res.status(200).json(category)
		return category
	} catch (error) {
	  res.status(500).json({ message: error })
	}
}	

export { createCategories }