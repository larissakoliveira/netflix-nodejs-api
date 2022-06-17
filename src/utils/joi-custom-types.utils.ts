import Joi from "joi"

const JoiEnumOfString = (enumerator: Object) => {
  return Joi.string().valid(...Object.values(enumerator))
}

export default JoiEnumOfString
