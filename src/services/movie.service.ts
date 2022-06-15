import { Repository } from "typeorm"
import { AppDataSource } from "../../configs/database/data-source"
import Movie from "../entities/movie.entity"

interface CreateMovieDTO {
  title: string;
}

// class Repo<T>{
//   find():Promise<T>
// }

class MovieService {
  private movieRepository: Repository<Movie>

  constructor() {
    this.movieRepository = AppDataSource.getRepository(Movie)
  }

  /**
   * Retrive all movies
   *
   * @returns Retrive all movies
   *
   * @beta
   */
  list() {
    return this.movieRepository.find()
  }

   /**
   * Create a new movie
   *
   * @returns Retrive all movies
   *
   * @beta
   */

  create(movie: CreateMovieDTO){
    return this.movieRepository.save(movie)
  }
}

export default MovieService
