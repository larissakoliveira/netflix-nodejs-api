import express from "express"

import { MovieController } from "../controllers"

const moviesRouter = express.Router()

moviesRouter.get("/movies", MovieController.list)
moviesRouter.post("/movies", MovieController.create)

export default moviesRouter
