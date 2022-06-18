import express from "express"
import passport from "passport"
import { injectUser } from "../middlewares"
import { ListController } from "../controllers"

const listRouter = express.Router()

listRouter.get("/list", passport.authenticate('jwt', { session: false }), injectUser, ListController.list)

export default listRouter
