import { Repository } from "typeorm"
import { Show, Episode } from "../entities"
import { CreateEpisodeDTO } from "../types/type"
import { BadRequestException, ConflictException } from "../exceptions"
import { AppDataSource } from "../infrastructure/database/data-source"

class EpisodeService {
  private episodeRepository: Repository<Episode>
  private showRepository: Repository<Show>

  constructor() {
    this.episodeRepository = AppDataSource.getRepository(Episode)
    this.showRepository = AppDataSource.getRepository(Show)
  }

   /**
   * Create an episode
   *
   * @returns Created new episode
   * @param {CreateEpisodeDTO} createEpisode
   */
  async create(createEpisode: CreateEpisodeDTO) {
    const { showId } = createEpisode;
    const foundShow = await this.showRepository.findOne({ where: { id: showId } })

    if (!foundShow) {
      throw new BadRequestException(`The show id: ${showId} does not exist`)
    }

    // const episodeAlreadyExists = await this.episodeRepository.findOneBy([{ title: createEpisode.title }, { showId: createEpisode.showId }])
    const episodeAlreadyExists = await this.episodeRepository.findOneBy({ title: createEpisode.title })
    if (episodeAlreadyExists !== null) {
      throw new ConflictException("A episode with this title already exists.")
    }

    const createdEpisode = await this.episodeRepository.save(createEpisode)
    foundShow.episodes = [...foundShow.episodes, createdEpisode]
    await this.showRepository.save(foundShow)

    return createdEpisode
  }
}

export default EpisodeService
