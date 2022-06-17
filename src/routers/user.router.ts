import express from "express"

import { UserController } from "../controllers"
import { validationMiddleware } from "../middlewares"
import { createUserSchema } from '../schemas';

const userRouter = express.Router()

userRouter.post("/user", validationMiddleware(createUserSchema), UserController.create)

export default userRouter
