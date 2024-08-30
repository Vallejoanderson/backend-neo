import { DataTypes } from 'sequelize'
import { sequelize } from '../connection'
 
const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, { tableName: 'categories' })

export { Category }

