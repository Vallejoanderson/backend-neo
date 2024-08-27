const { DataTypes } = require('sequelize')
const { sequelize } = require('../connection')
 
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

  module.exports = {
    Category
  }

