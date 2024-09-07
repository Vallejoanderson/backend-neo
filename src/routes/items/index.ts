import express from 'express'
import { createItem, getItemById, getItems } from '../../controllers/items/items'

const itemsRoute = express.Router()

itemsRoute.get('/', getItems)
itemsRoute.get('/:id', getItemById)
itemsRoute.post('/', createItem)

export { itemsRoute }