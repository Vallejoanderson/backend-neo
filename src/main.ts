import express from 'express'
import { sequelize } from './connection'
import { router } from './routes/main'
const app = express()
const port = 3000

app.use("/api", router)

sequelize
  .authenticate()
	.then(() => {
	  return sequelize.sync()
	})
	.then(() => {
	  app.listen(port, () => { console.log('Server listening on: ', port) })
	})
	.catch((err) => { console.error('Connection fail: ', err) })