import { NextFunction } from "express"
import jsonwebtoken from "jsonwebtoken"
import { User } from "../entities"
import { AppDataSource } from "../../configs/database/data-source"
import { CustomResponse, CustomRequest } from "../types/interfaces"
import { UnauthorizedException } from "../exceptions"

const injectUser = async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
  const token = req.headers.authorization?.replace("Bearer ", "")

  if (!token) {
    throw new UnauthorizedException()
  }

  const userRepository = AppDataSource.getRepository(User)
  const secretKey = process.env.SECRET || ""
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
