import { HTTP_STATUS } from "../types/enums";

abstract class HttpException extends Error {
  message: string;
  status: HTTP_STATUS;

  constructor(message: string, status: HTTP_STATUS) {
    super(message)

    this.status = status
    this.message = message
  }
}

export default HttpException;
