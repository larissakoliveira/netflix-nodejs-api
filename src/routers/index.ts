import morgan from "morgan"
import express, { Application } from "express"
import ShowsRouter from "./shows.routers"
import { errorHandlerMiddleware } from "../middlewares"

const routes = [
  ShowsRouter
]
const jsonParserMiddleware = express.json()

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware)
  app.use(morgan('tiny'))
  app.use(errorHandlerMiddleware)
  app.use(routes)
}

export default startRoutes
