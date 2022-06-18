import Joi from "joi";
import { ShowCategoryOptions } from "../types/enums";
import { JoiEnumOfString } from "../utils";

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
