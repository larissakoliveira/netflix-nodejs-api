import dotenv from 'dotenv';
// import path from 'path';
import { DataSource } from "typeorm"
// import { ConnectionOptions } from 'typeorm';

import Movie from "../../src/entities/movie.entity"

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3000,
  username: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  entities: [Movie],
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

const devConfig = {}

const prodConfig = {}
// export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
