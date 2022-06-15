import { Request, Response } from "express"
import { MovieService } from "../services"
import HTTP_STATUS from "../constants/http-status-constants"
const movieService = new MovieService()

class MovieController {
  public static async list(_: Request, res: Response) {
    const movies = await movieService.list()
    res.status(HTTP_STATUS.OK).json(movies)
  }

  public static async create(req: Request, res: Response){
    const movie = req.body
    const result = await movieService.create(movie)
    res.status(HTTP_STATUS.CREATED).json(result)
  }
}

export default MovieController
