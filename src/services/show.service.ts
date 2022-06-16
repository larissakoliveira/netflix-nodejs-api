import { Repository } from "typeorm"
import { AppDataSource } from "../../configs/database/data-source"
import { Show } from "../entities"
import { IShow } from "../types/interfaces"
import NotFoundException from '../exceptions/not-found-exception';
// class Repo<T>{
//   find():Promise<T>
// }

class ShowService {
  private showRepository: Repository<IShow>

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show)
  }

   /**
   * Create new shows
   *
   * @returns Retrive created show
   *
   * @beta
   */

  create(show: IShow){
    return this.showRepository.save(show)
  }

   /**
   * Retrive all shows
   *
   * @returns Retrive all shows
   *
   * @beta
   */
    list() {
      return this.showRepository.find()
    }

   /**
   * Retrive a show by its id
   *
   * @returns Retrive one show
   *
   * @beta
   */
    async listById(id: number) {
      const show = await this.showRepository.findOne({ where: { id } });
      if (show) {
        return show;
      }
      throw new NotFoundException(`The show with id = ${id} was not found`);
    }

     /**
   * Update a show by id
   *
   * @returns Update one show
   *
   * @beta
   */
      async updateById(id: number, updatedData: IShow) {
        const show = await this.showRepository.update({ id }, updatedData);
        if (show) {
          return show;
        }
        throw new NotFoundException(`The show with id = ${id} was not found`);
      }

    /**
   * Delete a show by its id
   *
   * @returns Delete one show
   *
   * @beta
   */
    async deleteById(id: number) {
      const show = await this.showRepository.delete(id);
      if (show.affected) {
        return show;
      }
      throw new NotFoundException(`The show with id = ${id} was not found`);
    }
}

export default ShowService
