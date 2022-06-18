import express from "express"
import passport from "passport";
import { EpisodeController } from "../controllers"
import { validationMiddleware } from "../middlewares"
import { CreateEpisodeSchema } from "../schemas"

const episodesRouter = express.Router()

episodesRouter.post("/episodes", passport.authenticate('jwt', { session: false }), validationMiddleware(CreateEpisodeSchema), EpisodeController.create)

export default episodesRouter
