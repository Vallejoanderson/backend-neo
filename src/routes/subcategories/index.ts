import { getSubcategories, createSubcategories, getSubcategoriesByCategoryId } from '../../controllers/subcategories/subcategories'
import express from 'express'

const subCategoriesRoute = express.Router()

subCategoriesRoute.get('/', getSubcategories)
subCategoriesRoute.post('/', createSubcategories)
subCategoriesRoute.get('/:categoryId', getSubcategoriesByCategoryId)

export { subCategoriesRoute }