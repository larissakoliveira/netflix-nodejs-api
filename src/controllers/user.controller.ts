import { Request } from 'express'
import { UserService } from '../services'
import { HTTP_STATUS } from '../types/enums'
import logger from '../infrastructure/logger/logger'
import { CustomResponse } from '../types/interfaces'
// import { UnauthorizedException } from '../exceptions'

const userService = new UserService()
const winstonLogger = logger({ controller: "UserController" })

class UserController {
  public static async create(req: Request, res: CustomResponse) {
    const { body } = req;
    try {
      const user = await userService.create(body)
      res.json({
        id: user.id,
        email: user.email
      }).status(HTTP_STATUS.CREATED)
    } catch (error) {
      winstonLogger.error(`Error creating user! DATA: ${JSON.stringify(body.email)}`)
      res.errorHandler && res.errorHandler(error)
    }
  }

  // public static async getMe(req: CustomRequest, res: CustomResponse) {
  //   const { loggedUser } = req
  //   try {
  //     if (!loggedUser) {
  //       throw new UnauthorizedException()
  //     }
  //     res.json(loggedUser).status(HTTP_STATUS.OK)
  //   } catch (error) {
  //     winstonLogger.error(`Error getting user! DATA: ${JSON.stringify(loggedUser)}`)
  //     res.errorHandler && res.errorHandler(error)
  //   }
  // }
}

export default UserController
