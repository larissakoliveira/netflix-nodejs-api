import { Request } from 'express';
import UserService from '../services/user.service';
import HTTP_STATUS from '../types/enums/http-status-constants';
import { CustomResponse } from '../types/interfaces';

const userService = new UserService()

class UserController {
  public static async create(req: Request, res: CustomResponse) {
    try {
      const user = await userService.create(req.body)
      res.json({
        id: user.id,
        email: user.email
      }).status(HTTP_STATUS.CREATED)
    } catch (error) {
      console.log(`Error creating user! DATA: ${JSON.stringify(req.body.email)}`)
      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default UserController
