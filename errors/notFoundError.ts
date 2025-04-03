import { HttpError } from "./httpError";

export class NotFoundError extends HttpError {
  constructor(message = "Not Found") {
    super(404, message);
  }
}
