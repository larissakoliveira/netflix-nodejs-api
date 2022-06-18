import { Repository } from "typeorm";
import { AppDataSource } from "../../configs/database/data-source";
import { Show, User } from "../entities";
import { BadRequestException, NotFoundException } from "../exceptions";

class ListService {
  userRepository: Repository<User>
  showRepository: Repository<Show>

  constructor() {
    this.userRepository = AppDataSource.getRepository(User)
    this.showRepository = AppDataSource.getRepository(Show)
  }

  private movieAlreadyInTheList(showId: number, user: User) {
    return user.list.filter((show) => show.id === showId).length > 0
  }

  async add(showId: number, user: User) {
    if (this.movieAlreadyInTheList(showId, user)) {
      throw new BadRequestException(`Movie with id ${showId} already added`)
    }

    const show = await this.showRepository.findOne({ where: { id: showId } })

    if (!show) {
      throw new NotFoundException(`Show id ${showId} not found`)
    }

    user.list = [...user.list, show];
    return this.userRepository.save(user)
  }

  delete(showId: number, user: User) {
    const newUserList = user.list.filter(show => show.id !== showId)
    return this.userRepository.save({ ...user, list: newUserList })
  }
}

export default ListService
