import express from "express"
import { loginSchema } from '../schemas'
import { AuthController } from "../controllers"
import { validationMiddleware } from "../middlewares"

const authRouter = express.Router()

authRouter.post("/auth", validationMiddleware(loginSchema), AuthController.login)

export default authRouter
