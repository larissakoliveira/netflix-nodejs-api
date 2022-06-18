import { Repository } from "typeorm"
import { AppDataSource } from "../../configs/database/data-source"
import { NotFoundException, ConflictException } from '../exceptions'
import { CreateShowDTO, IShow } from "../types/interfaces"
import { Show } from "../entities"

class ShowService {
  private showRepository: Repository<IShow>

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show)
  }

   /**
   * Create new shows
   *
   * @returns Retrive created show
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
   * Retrive all shows
   *
   * @returns Retrive all shows
   *
   */
    list() {
      return this.showRepository.find()
    }

   /**
   * Retrive a show by its id
   *
   * @returns Retrive one show
   * @param {number} id show id
   */
    async listById(id: number) {
      const show = await this.showRepository.findOne({ where: { id } });
      if (show) {
        return show;
      }
      throw new NotFoundException(`The show id = ${id} was not found`);
    }

     /**
   * Update a show by id
   *
   * @returns Update one show
   * @param {number} id show id
   * @param {IShow} updatedData body sent with show data to update
   */
      async updateById(id: number, updatedData: IShow) {
        const show = await this.showRepository.update({ id }, updatedData);
        if (show.affected === 0) {
          throw new NotFoundException(`The show with id = ${id} was not found`);
        }
        return show
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
      throw new NotFoundException(`The show id = ${id} was not found`);
    }
}

export default ShowService
