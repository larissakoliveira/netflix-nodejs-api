import express from "express"
import passport from "passport";
import { CreateEpisodeSchema } from "../schemas"
import { EpisodeController } from "../controllers"
import { validationMiddleware } from "../middlewares"

const episodesRouter = express.Router()

episodesRouter.post("/episodes", passport.authenticate('jwt', { session: false }), validationMiddleware(CreateEpisodeSchema), EpisodeController.create)

export default episodesRouter
