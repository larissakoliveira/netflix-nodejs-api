import { Request } from "express"
import { ShowService } from "../services"
import { HTTP_STATUS } from "../types/enums"
import { CustomResponse } from "../types/interfaces"

const showService = new ShowService()

class ShowController {
  public static async create(req: Request, res: CustomResponse){
    try {
      const shows = req.body
      const output = await showService.create(shows)
      res.json(output).status(HTTP_STATUS.CREATED)
    } catch (error) {
      res.errorHandler && res.errorHandler(error)
    }
  }

  public static async list(_: Request, res: CustomResponse) {
    try {
      const shows = await showService.list()
      res.json(shows).status(HTTP_STATUS.OK)
    } catch (error) {
      res.errorHandler && res.errorHandler(error)
    }
  }

  public static async listById(req: Request, res: CustomResponse) {
    try {
      const id = req.params.id;
      const show = await showService.listById(+id)
      res.json(show).status(HTTP_STATUS.OK)
    } catch (error) {
      res.errorHandler && res.errorHandler(error)
    }
  }

  public static async updateById(req: Request, res: CustomResponse){
    const id = req.params.id;
    try {
      const output = await showService.updateById(+id, req.body)
      res.json(output).status(HTTP_STATUS.OK)
    } catch (error) {
      res.errorHandler && res.errorHandler(error)
    }
  }

  public static async deleteById(req: Request, res: CustomResponse) {
    try {
      const id = req.params.id;
      const deletedShow = await showService.deleteById(+id)
      res.json(deletedShow).status(HTTP_STATUS.OK)
    } catch (error) {
      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default ShowController
