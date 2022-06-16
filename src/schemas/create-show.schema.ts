import Joi from "joi";
import { ShowCategoryOptions } from "../types/enums";
import { JoiEnumOfString } from "../utils";

const createShowSchema = Joi.object({
  cover: Joi.string().required(),
  title: Joi.string().required(),
  director: Joi.string().required(),
  actors: Joi.array().items(Joi.string()),
  description: Joi.string().required(),
  category: JoiEnumOfString(ShowCategoryOptions)
})

export default createShowSchema
