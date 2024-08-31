import express from 'express'
import { categoriesRoute } from './categories/index'
const router = express.Router()

router.use(express.json())
router.use('/categories', categoriesRoute)

export { router }