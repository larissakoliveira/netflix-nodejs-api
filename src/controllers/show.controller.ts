import { Request, Response } from "express"
import errorHandler from "../middlewares/error-handler.middleware"
// import errorHandler from "../middlewares/error-handler.middleware"
import { ShowService } from "../services"
import HTTP_STATUS from "../types/enums/http-status-constants"

const showService = new ShowService()

class ShowController {
  public static async create(req: Request, res: Response){
    const show = req.body
    const result = await showService.create(show)
    res.status(HTTP_STATUS.CREATED).json(result)
  }

  public static async list(_: Request, res: Response) {
    const shows = await showService.list()
    res.status(HTTP_STATUS.OK).json(shows)
  }

  public static async listById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const show = await showService.listById(+id)
      res.json(show).status(HTTP_STATUS.OK)
    } catch (e) {
      errorHandler(e, res)
    }
  }

  public static async updateById(req: Request, res: Response){
    const updatedDataShow = req.body
    const id = req.params.id;
    try {
      const output = await showService.updateById(+id, updatedDataShow)
      res.status(HTTP_STATUS.OK).json(output)
    } catch (error) {
      errorHandler(error, res)
    }
  }

  public static async deleteById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const shows = await showService.deleteById(+id)

      res.json(shows).status(HTTP_STATUS.OK)
    } catch (e) {
      errorHandler(e, res)
    }
  }
}

export default ShowController
