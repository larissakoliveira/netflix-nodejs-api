import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

const validationMiddleware = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req.body)
    next()
  } catch (error: any) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export default validationMiddleware
