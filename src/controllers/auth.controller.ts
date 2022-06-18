import { Request } from 'express';
import { AuthService } from '../services';
import { CustomResponse } from '../types/interfaces';
import { HTTP_STATUS } from '../types/enums';

const authService = new AuthService()

class AuthController {
  public static async login(req: Request, res: CustomResponse) {
    const { body: { email, password } } = req;

    try {
      const authenticatedUser = await authService.login(email, password)
      res.json(authenticatedUser).status(HTTP_STATUS.OK)
    } catch (e) {
      console.log(`Error while login user! Data: ${JSON.stringify({ email })}`)
      res.errorHandler && res.errorHandler(e)
    }
  }
}

export default AuthController
