import morgan from "morgan"
import express, { Application } from "express"
import ShowsRouter from "./shows.routers"
import { errorHandlerMiddleware } from "../middlewares"
import AuthRouter from "./auth.router"
import UserRouter from './user.router';
import EpisodesRouter from "./episode.router"

const routes = [
  ShowsRouter,
  AuthRouter,
  UserRouter,
  EpisodesRouter
]
const jsonParserMiddleware = express.json()

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware)
  app.use(morgan('tiny'))
  app.use(errorHandlerMiddleware)
  app.use(routes)
}

export default startRoutes
