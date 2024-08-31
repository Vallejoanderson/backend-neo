import { createCategories } from '../../controllers/categories/categories'
import express from 'express'

const categoriesRoute = express.Router()

categoriesRoute.post('/', createCategories)

export { categoriesRoute }