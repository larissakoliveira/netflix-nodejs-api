import { Request } from 'express'
import { AuthService } from '../services'
import { HTTP_STATUS } from '../types/enums'
import { CustomResponse } from '../types/interfaces'
import logger from "../infrastructure/logger/logger"

const authService = new AuthService()
const winstonLogger = logger({ controller: "AuthController" })

class AuthController {
  public static async login(req: Request, res: CustomResponse) {
    const { body: { email, password } } = req;

    try {
      const authenticatedUser = await authService.login(email, password)
      res.json(authenticatedUser).status(HTTP_STATUS.OK)
    } catch (e) {
        winstonLogger.error(`Error while login user! Data: ${JSON.stringify(email)}`)
      res.errorHandler && res.errorHandler(e)
    }
  }
}

export default AuthController
