import { Expense } from "../../models/expenses"
import { Request, Response } from "express"
import { Op } from "sequelize"

const getExpenses = async (req: Request, res: Response) => {
  try {
    const startDate = req.query.startDate
      ? new Date(req.query.startDate as string)
      : new Date(new Date().getFullYear(), new Date().getMonth(), 1)

    const endDate = req.query.endDate
      ? new Date(req.query.endDate as string)
      : new Date()
      
    endDate.setDate(endDate.getDate() + 1)

    const expenses = await Expense.findAll({
      where: {
        expenseDate: {
          [Op.between]: [startDate, endDate]
        }
      }
    })
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const createExpense = async (req: Request, res: Response) => {
  try {
      const { itemId, cost, expenseDate } = req.body
      const newExpense = await Expense.create({ itemId, cost, expenseDate })
      res.status(201).json(newExpense)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export { getExpenses, createExpense }