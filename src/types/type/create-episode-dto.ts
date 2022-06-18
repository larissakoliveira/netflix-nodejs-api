import { Episode } from "../../entities"

type CreateEpisodeDTO = Omit<Episode, "id"> & { showId: number }

export default CreateEpisodeDTO
