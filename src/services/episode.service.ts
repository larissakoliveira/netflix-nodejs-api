import { Repository } from "typeorm"
import { Show, Episode } from "../entities"
import { CreateEpisodeDTO } from "../types/type"
import { BadRequestException } from "../exceptions"
import { AppDataSource } from "../infrastructure/database/data-source"

class EpisodeService {
  private episodeRepository: Repository<Episode>
  private showRepository: Repository<Show>

  constructor() {
    this.episodeRepository = AppDataSource.getRepository(Episode)
    this.showRepository = AppDataSource.getRepository(Show)
  }

  async create(createEpisode: CreateEpisodeDTO) {
    const { showId } = createEpisode;
    const foundShow = await this.showRepository.findOne({ where: { id: showId } })

    if (!foundShow) {
      throw new BadRequestException(`The show id: ${showId} does not exist`)
    }

    const createdEpisode = await this.episodeRepository.save(createEpisode)
    foundShow.episodes = [...foundShow.episodes, createdEpisode]
    await this.showRepository.save(foundShow)

    return createdEpisode
  }
}

export default EpisodeService
