import { DataTypes } from 'sequelize'
import { sequelize } from '../connection'

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subCategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'subcategories',
      key: 'id',
    }
  },
  type: {
    type: DataTypes.ENUM('product', 'service'),
    allowNull: false,
    defaultValue: 'product',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, { tableName: 'items'})

export { Item }