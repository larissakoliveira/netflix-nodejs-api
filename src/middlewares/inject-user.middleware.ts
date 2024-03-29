import { NextFunction } from "express"
import jsonwebtoken from "jsonwebtoken"
import { User } from "../entities"
import { UnauthorizedException } from "../exceptions"
import { CustomResponse, CustomRequest } from "../types/interfaces"
import { AppDataSource } from "../infrastructure/database/data-source"

const injectUser = async (req: CustomRequest, _: CustomResponse, next: NextFunction) => {
  const token = req.headers.authorization?.replace("Bearer ", "")

  if (!token) {
    throw new UnauthorizedException()
  }

  const userRepository = AppDataSource.getRepository(User)
  const secretKey = process.env.SECRET_KEY || ""
  const payload = await jsonwebtoken.verify(token, secretKey)

  if (!payload.sub) {
    throw new UnauthorizedException()
  }

  const loggedUser = await userRepository.findOne({ where: { id: +payload.sub } })

  if (!loggedUser) {
    throw new UnauthorizedException()
  }

  req.loggedUser = loggedUser
  next()
}

export default injectUser
