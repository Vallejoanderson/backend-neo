import { getSubcategories, createSubcategories } from '../../controllers/subcategories/subcategories'
import express from 'express'

const subCategoriesRoute = express.Router()

subCategoriesRoute.get('/', getSubcategories)
subCategoriesRoute.post('/', createSubcategories)

export { subCategoriesRoute }