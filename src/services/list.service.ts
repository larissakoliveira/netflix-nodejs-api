import { Repository } from "typeorm"
import { Show, User } from "../entities"
import { AppDataSource } from "../infrastructure/database/data-source"
import { BadRequestException, NotFoundException } from "../exceptions"

class ListService {
  userRepository: Repository<User>
  showRepository: Repository<Show>

  constructor() {
    this.userRepository = AppDataSource.getRepository(User)
    this.showRepository = AppDataSource.getRepository(Show)
  }
    /**
   * Check if movie is already added to the list
   *
   * @returns boolean
   * @param {number} showId
   * @param {User} user
   */

  private movieAlreadyInTheList(showId: number, user: User) {
    return user.list.filter((show) => show.id === showId).length > 0
  }

    /**
   * Add an episode to the user's list
   *
   * @returns show added
   * @param {number} showId
   * @param {User} user
   */

  async add(showId: number, user: User) {
    if (this.movieAlreadyInTheList(showId, user)) {
      throw new BadRequestException(`Movie with id ${showId} already added`)
    }

    const show = await this.showRepository.findOne({ where: { id: showId } })

    if (!show) {
      throw new NotFoundException(`Show id ${showId} not found`)
    }

    user.list = [...user.list, show]
    await this.userRepository.save(user)
    return show
  }

    /**
   * Delete an episode
   *
   * @returns Deleted episode
   * @param {number} showId
   * @param {User} user
   */

  async delete(showId: number, user: User) {
    const show = await this.showRepository.findOne({ where: { id: showId } })
    const newUserList = user.list.filter(show => show.id !== showId)
    this.userRepository.save({ ...user, list: newUserList })
    return show
  }
}

export default ListService
