import { DataTypes } from "sequelize"
import { sequelize } from "../connection"

const Expense = sequelize.define('Expense', {
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'items',
      key: 'id'
    },
  },
  cost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  expenseDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, { tableName: 'expenses' })

export { Expense }