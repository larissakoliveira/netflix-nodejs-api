import { NextFunction, Request } from "express"
import { HTTP_STATUS } from "../types/enums"
import { HttpException } from "../exceptions"
import { CustomResponse } from "../types/interfaces"

const errorHandlerMiddleware = (req: Request, res: CustomResponse, next: NextFunction) => {
  res.errorHandler = (error: any) => {
    if (error instanceof HttpException) {
      res
        .status(error.status)
        .json({ error: true, message: error.message, details: error })
    } else {
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: true })
    }
  }

  next()
}

export default errorHandlerMiddleware
