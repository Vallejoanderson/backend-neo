import { createExpense, getExpenses } from "../../controllers/expenses/expenses"
import express from "express"

const expensesRoute = express.Router()

expensesRoute.get("/", getExpenses)
expensesRoute.post("/", createExpense)

export { expensesRoute }