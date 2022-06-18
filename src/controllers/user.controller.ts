import { Request } from 'express';
import { UserService } from '../services';
import { HTTP_STATUS } from '../types/enums';
import { CustomResponse } from '../types/interfaces';

const userService = new UserService()

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
      console.log(`Error creating user! DATA: ${JSON.stringify(body.email)}`)
      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default UserController
