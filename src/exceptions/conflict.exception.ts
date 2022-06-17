import { HTTP_STATUS } from "../types/enums";
import HttpException from "./http.exception";

export default class ConflictException extends HttpException {
  constructor(message: string) {
    super(message, HTTP_STATUS.CONFLICT)
  }
}
