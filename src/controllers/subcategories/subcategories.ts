import { Subcategory } from "../../models/subcategory"
import { Request, Response } from 'express'

const getSubcategories = async (req: Request, res: Response) => {
	try {
		const subcategories = await Subcategory.findAll()
		res.status(200).json(subcategories)
	} catch (error) {
	  res.status(500).json({ message: error })
	}
}

const createSubcategories = async (req: Request, res: Response) => {
	try {
		const { name, categoryId } = req.body
		const subcategory = await Subcategory.create({ name, categoryId })
		res.status(200).json(subcategory)
	} catch (error) {
	  res.status(500).json({ message: error })
	}
}

const getSubcategoriesByCategoryId = async (req: Request, res: Response) => {
	try {
		const { categoryId } = req.body
		const subcategory = await Subcategory.findAll({ where: { categoryId } })
		res.status(200).json(subcategory)
	} catch (error) {
		res.status(500).json({ message: error })
	}
}

export { getSubcategories, createSubcategories, getSubcategoriesByCategoryId }