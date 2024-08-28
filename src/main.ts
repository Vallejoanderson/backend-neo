import express, { Request, Response } from 'express'
import { sequelize } from './connection'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
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
	.catch((err: any) => { console.error('Connection fail: ', err) })