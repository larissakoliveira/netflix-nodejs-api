import Joi from "joi";
import { regexPassword } from "../utils";

const createUserSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).regex(regexPassword, "password must contain at least 1 lowercase and uppercase letter, 1 special character and 1 number!")
})

export default createUserSchema
