import Joi from "joi";
import { JoiEnumOfString } from "../utils";
import { ShowCategoryOptions } from "../types/enums";

const createShowSchema = Joi.object({
  cover: Joi.string().required(),
  title: Joi.string().required(),
  director: Joi.string().required(),
  actors: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required(),
  category: JoiEnumOfString(ShowCategoryOptions)
})

export default createShowSchema
