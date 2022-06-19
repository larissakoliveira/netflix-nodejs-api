import express from "express"
// import passport from "passport"
import { createUserSchema } from '../schemas'
import { UserController } from "../controllers"
import { validationMiddleware } from "../middlewares"

const userRouter = express.Router()

userRouter.post("/user", validationMiddleware(createUserSchema), UserController.create)
// userRouter.get("/me", passport.authenticate('jwt', { session: false }), UserController.getMe)

export default userRouter
