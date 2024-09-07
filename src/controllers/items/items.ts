import { Item } from "../../models/items"
import { Request, Response } from 'express'

const getItems = async (req: Request, res: Response) => {
  try {
      const items = await Item.findAll()
      res.status(200).json(items)
   } catch (error) {
      res.status(500).json({ message: error })
   }
}

const getItemById = async (req: Request, res: Response) => {
  try {
    const item = await Item.findByPk(req.params.id)
    if (item) {
      res.status(200).json(item)
    } else {
      res.status(404).json({ message: 'Item not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const createItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.create(req.body)
    res.status(201).json(item)
  } catch (error) {
  res.status(500).json({ message: error })
  }
}

export { getItems, getItemById, createItem }