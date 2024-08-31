import { createCategories, getCategories } from '../../controllers/categories/categories'
import express from 'express'

const categoriesRoute = express.Router()

categoriesRoute.get('/', getCategories)
categoriesRoute.post('/', createCategories)

export { categoriesRoute }