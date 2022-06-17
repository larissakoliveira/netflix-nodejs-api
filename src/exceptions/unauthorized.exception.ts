import { HTTP_STATUS } from "../types/enums";
import HttpException from "./http.exception";

export default class UnauthorizedException extends HttpException {
  constructor(message = "Unauthorized") {
    super(message, HTTP_STATUS.UNAUTHORIZED)
  }
}
