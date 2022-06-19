import morgan from "morgan"
import express, { Application } from "express"
import AuthRouter from "./auth.router"
import ListRouter from "./list.routes"
import UserRouter from './user.router';
import ShowsRouter from "./shows.routers"
import EpisodesRouter from "./episode.router"
import { errorHandlerMiddleware } from "../middlewares"

const routes = [
  ShowsRouter,
  AuthRouter,
  UserRouter,
  EpisodesRouter,
  ListRouter
]
const jsonParserMiddleware = express.json()

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware)
  app.use(morgan('tiny'))
  app.use(errorHandlerMiddleware)
  app.use(routes)
}

export default startRoutes
