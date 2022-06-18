import { Request } from "express";
import { User } from "../../entities";

export default interface CustomRequest extends Request {
  loggedUser?: User
}
