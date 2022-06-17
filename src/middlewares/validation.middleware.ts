import { Schema } from "joi"
import { NextFunction, Request } from "express"
import { CustomResponse } from "../types/interfaces"
import { ValidationException } from "../exceptions"

const validationMiddleware = (schema: Schema) => async (req: Request, res: CustomResponse, next: NextFunction) => {
  try {
    const validated = await schema.validate(req.body, { abortEarly: false })

    if (validated.error) {
      throw new ValidationException("Invalid fields", validated.error?.details)
    }
    next()
  } catch (error) {
    res.errorHandler && res.errorHandler(error)
  }
}

export default validationMiddleware;
