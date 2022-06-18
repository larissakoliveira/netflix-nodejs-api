import express from "express"
import { createUserSchema } from '../schemas'
import { UserController } from "../controllers"
import { validationMiddleware } from "../middlewares"

const userRouter = express.Router()

userRouter.post("/user", validationMiddleware(createUserSchema), UserController.create)

export default userRouter
