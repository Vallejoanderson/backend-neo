import { Product } from "../../models/products"
import { Request, Response } from 'express'

const getProducts = async (req: Request, res: Response) => {
  try {
      const products = await Product.findAll()
      res.status(200).json(products)
   } catch (error) {
      res.status(500).json({ message: error })
   }
}

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByPk(req.params.id)
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
  res.status(500).json({ message: error })
  }
}

export { getProducts, getProductById, createProduct }