import { Response } from "express";

export default interface CustomResponse extends Response {
  errorHandler?: Function
}
