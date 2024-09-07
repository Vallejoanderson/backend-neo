import express from 'express'
import { categoriesRoute } from './categories/index'
import { subCategoriesRoute } from './subcategories'
import { itemsRoute } from './items'
import { expensesRoute } from './expenses'
const router = express.Router()

router.use(express.json())
router.use('/categories', categoriesRoute)
router.use('/subcategories', subCategoriesRoute)
router.use('/items', itemsRoute)
router.use('/expenses', expensesRoute)

export { router }