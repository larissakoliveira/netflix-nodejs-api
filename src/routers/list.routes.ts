import express from "express"
import passport from "passport"
import { injectUser } from "../middlewares"
import { ListController } from "../controllers"

const listRouter = express.Router()

listRouter.get("/list", passport.authenticate('jwt', { session: false }), injectUser, ListController.list)

listRouter.post("/list", passport.authenticate('jwt', { session: false }), injectUser, ListController.add)

listRouter.delete("/list/:showId", passport.authenticate('jwt', { session: false }), injectUser, ListController.deleteById)

export default listRouter
