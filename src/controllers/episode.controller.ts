import { Request } from "express";
import { HTTP_STATUS } from "../types/enums";
import { EpisodeService } from "../services";
import { CustomResponse } from "../types/interfaces";

const episodeService = new EpisodeService()

class EpisodeController {
  public static async create(req: Request, res: CustomResponse) {
    try {
      const episodeBody = req.body;
      const createdEpisode = await episodeService.create(episodeBody)

      res.status(HTTP_STATUS.CREATED).json(createdEpisode)
    } catch (e) {
      res.errorHandler && res.errorHandler(e)
    }
  }
}

export default EpisodeController
