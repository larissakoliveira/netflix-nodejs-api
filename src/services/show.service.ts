import { Repository } from "typeorm"
import { Show } from "../entities"
import { CreateShowDTO, IShowUpdate } from "../types/interfaces"
import { NotFoundException, ConflictException } from '../exceptions'
import { AppDataSource } from "../infrastructure/database/data-source"

class ShowService {
  private showRepository: Repository<Show>

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show)
  }

   /**
   * Create new shows
   *
   * @returns Retrieve created show
   * @param {IShow} show show data
   */

  async create(show: CreateShowDTO){
    const movieAlreadyExists = await this.showRepository.findOneBy({ title: show.title })
    if (movieAlreadyExists !== null) {
      throw new ConflictException("A movie with this title already exists.")
    }
    return this.showRepository.save(show)
  }

   /**
   * Retrieve all shows
   *
   * @returns Retrieve all shows
   *
   */
    list() {
      return this.showRepository.find()
    }

   /**
   * Retrieve a show by its id
   *
   * @returns Retrieve one show
   * @param {number} id show id
   */
    async listById(id: number) {
      const show = await this.showRepository.findOne({ where: { id } });
      if (show) {
        return show;
      }
      throw new NotFoundException(`The show id ${id} was not found`);
    }

     /**
   * Update a show by id
   *
   * @returns Update one show
   * @param {number} id show id
   * @param {IShow} updatedData body sent with show data to update
   */
      async updateById(id: number, updatedData: IShowUpdate) {
          const shows = await this.showRepository.find()
          const titleAlreadyExists = shows.filter((show) => show.title === updatedData.title)

          if (titleAlreadyExists.length > 0) {
            throw new ConflictException("A show with this title already exists")
        }

        const show = await this.showRepository.update({ id }, updatedData)
        if (show.affected === 0) {
          throw new NotFoundException(`The show with id = ${id} was not found`)
        }
        const updatedShow = await this.showRepository.findOne({ where: { id } })
        return updatedShow
      }

    /**
   * Delete a show by its id
   *
   * @returns Delete one show
   * @param {number} id show id
   */
    async deleteById(id: number) {
      const deletedShow = await this.showRepository.findOne({ where: { id } });
      const show = await this.showRepository.delete(id);
      if (show.affected) {
        return deletedShow
      }
      throw new NotFoundException(`The show id ${id} was not found`);
    }
}

export default ShowService
