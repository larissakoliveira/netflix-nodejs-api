import express from "express"

import { AuthController } from "../controllers"
import { validationMiddleware } from "../middlewares"
import { loginSchema } from '../schemas';

const authRouter = express.Router()

authRouter.post("/auth", validationMiddleware(loginSchema), AuthController.login)

export default authRouter
