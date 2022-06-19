import logger from "../infrastructure/logger/logger"
import { ListService } from "../services"
import { HTTP_STATUS } from "../types/enums"
import { UnauthorizedException } from "../exceptions"
import { CustomRequest, CustomResponse } from "../types/interfaces"

const listService = new ListService()
const winstonLogger = logger({ controller: "ListController" })

class ListController {
  public static async add(req: CustomRequest, res: CustomResponse) {
    const { body: { showId }, loggedUser } = req

    try {
      if (!loggedUser) {
        throw new UnauthorizedException()
      }

      const added = await listService.add(showId, loggedUser)
      res.json(added).status(HTTP_STATUS.OK)
    } catch (e) {
      winstonLogger.error(`Error adding to list! Data: ${JSON.stringify(req.loggedUser)}`)
      res.errorHandler && res.errorHandler(e)
    }
  }

  public static async list(req: CustomRequest, res: CustomResponse) {
    try {
      const usersList = req.loggedUser?.list
      res.json(usersList).status(HTTP_STATUS.OK)
    } catch (error) {
      winstonLogger.error(`Error to retrieve the list! Data: ${JSON.stringify(req.loggedUser)}`)
      res.errorHandler && res.errorHandler(error)
    }
  }

  public static async deleteById(req: CustomRequest, res: CustomResponse) {
    const { params: { showId }, loggedUser } = req

    try {
      if (!loggedUser) {
        throw new UnauthorizedException()
      }

      const deleted = await listService.delete(+showId, loggedUser)
      res.json(deleted).status(HTTP_STATUS.OK)
    } catch (e) {
      winstonLogger.error(`Error removing from list! Data: ${JSON.stringify(req.loggedUser)}`);
      res.errorHandler && res.errorHandler(e);
    }
  }
}

export default ListController
