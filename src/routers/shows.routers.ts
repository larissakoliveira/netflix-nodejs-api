import express from "express"
import passport from "passport";
import { ShowController } from "../controllers"
import { validationMiddleware } from "../middlewares"
import { createShowSchema, updateShowSchema } from '../schemas';

const showsRouter = express.Router()

showsRouter.get("/shows", passport.authenticate('jwt', { session: false }), ShowController.list)
showsRouter.get("/shows/:id", passport.authenticate('jwt', { session: false }), ShowController.listById)
showsRouter.post("/shows", passport.authenticate('jwt', { session: false }), validationMiddleware(createShowSchema), ShowController.create)
showsRouter.patch("/shows/:id", passport.authenticate('jwt', { session: false }), validationMiddleware(updateShowSchema), ShowController.updateById)
showsRouter.delete("/shows/:id", passport.authenticate('jwt', { session: false }), ShowController.deleteById)

export default showsRouter
