import Joi from "joi"
import { JoiEnumOfString } from "../utils"
import { ShowCategoryOptions } from "../types/enums"

const updateShowSchema = Joi.object({
  cover: Joi.string(),
  title: Joi.string(),
  director: Joi.string(),
  actors: Joi.array().items(Joi.string()),
  description: Joi.string(),
  category: JoiEnumOfString(ShowCategoryOptions),
  episodes: Joi.array().items(Joi.object())
})

export default updateShowSchema
