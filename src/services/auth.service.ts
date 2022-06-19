import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import UserService from "./user.service"
import UnauthorizedException from '../exceptions/unauthorized.exception';

class AuthService {
   /**
   * It does the user authentication, login
   *
   * @param {string} email user's email
   * @param {string} password user's password
   * @returns LoginResponse - user token
   **/
    async login(email: string, password: string) {
      const userService = new UserService()
      const secretKey = process.env.SECRET_KEY || ""

      const user = await userService.getUserByEmail(email)

      if (!user){
        throw new UnauthorizedException()
      }

      const verifyPassword = await bcrypt.compare(password, user.password)

      if (!verifyPassword){
        throw new UnauthorizedException()
      }

      const token = jwt.sign({
        sub: user.id,
        iat: Date.now(),
        email: user.email
      }, secretKey)

    return {
      token
    }
}
}

export default AuthService
