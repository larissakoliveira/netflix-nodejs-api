import express from "express"

import { ShowController } from "../controllers"
import { validationMiddleware } from "../middlewares"
import { createShowSchema } from '../schemas';

const showsRouter = express.Router()

showsRouter.get("/shows", ShowController.list)
showsRouter.get("/shows/:id", ShowController.listById)
showsRouter.post("/shows", validationMiddleware(createShowSchema), ShowController.create)
showsRouter.put("/shows/:id", validationMiddleware(createShowSchema), ShowController.create)
showsRouter.delete("/shows/:id", ShowController.deleteById)

export default showsRouter
