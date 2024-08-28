import { Sequelize } from 'sequelize'

const database: string = process.env.DATABASE_NAME ?? ''
const username: string = process.env.DATABASE_USER ?? ''
const password: string = process.env.DATABASE_PASSWORD ?? ''
const host: string = process.env.DATABASE_HOST ?? ''

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
})

export { sequelize }