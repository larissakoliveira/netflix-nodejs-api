import dotenv from 'dotenv';
import { DataSource } from "typeorm"

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3000,
  username: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  entities: ["src/entities/*.entity.ts"],
  synchronize: true
})

async function databaseInitialize() {
  try {
    await AppDataSource.initialize()

    console.log("Database connected")
  } catch (e: unknown) {
    console.error(e)
  }
}

export default databaseInitialize
