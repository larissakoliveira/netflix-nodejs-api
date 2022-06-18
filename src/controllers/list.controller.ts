import { HTTP_STATUS } from "../types/enums"
import { CustomRequest, CustomResponse } from "../types/interfaces"

class ListController {
  public static async list(req: CustomRequest, res: CustomResponse) {
    try {
      const myList = req.loggedUser?.list
      res.json(myList).status(HTTP_STATUS.OK)
    } catch (error) {
      console.log(`Error bringing the list! Data: ${JSON.stringify(req.loggedUser)}`)
      res.errorHandler && res.errorHandler(error)
    }
  }
}

export default ListController
