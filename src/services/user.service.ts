import bcrypt from "bcrypt"
import { Repository } from 'typeorm';
import { User } from '../entities';
import { CreateUserDTO } from '../types/interfaces';
import { AppDataSource } from '../../configs/database/data-source';
import { ConflictException } from "../exceptions";

class UserService {
  userRepository: Repository<User>

  constructor(){
    this.userRepository = AppDataSource.getRepository(User)
  }

   /**
   * It verifies if user already exists
   *
   * @param {string} email user's email
   * @returns boolean - false/true
   **/
    private async emailAlreadyExists(email: string){
      const foundUser = await this.userRepository.findOne({ where: { email } })
      return !!foundUser
    }

     /**
   * Get user by email its email address
   *
   * @param {string} email user's email
   * @returns User
   **/

      async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({ where: { email } })
        return user
      }

    /**
   * It creates a new user
   *
   * @param createUserDTO user's data
   * @returns LoginResponse - user token
   **/

     async create(createUserDTO: CreateUserDTO){
      const { email, password } = createUserDTO
      const emailAlreadyExists = await this.emailAlreadyExists(email)
      if (emailAlreadyExists){
        throw new ConflictException("User already exists")
      }

      const newUserData = {
        email,
        password: bcrypt.hashSync(password, 10)
      }
       return this.userRepository.save(newUserData)
     }
}

export default UserService
