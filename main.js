const express = require('express')
const app = express()
const port = 3000
const { sequelize } = require('./connection')
const { Category } = require('./models/category')

app.get('/', (req, res) => {
  res.send('Hello from Node API')
})

sequelize
  .authenticate()
	.then(() => {
		return sequelize.sync()
	})
	.then(() => {
		app.listen(port, () => { console.log('Server listening on: ', port) })
	})
	.catch((err) => { console.error('Connection fail: ', err) })