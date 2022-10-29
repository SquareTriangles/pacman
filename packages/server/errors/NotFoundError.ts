import AbstractError from "./AbstractError";

class NotFoundError extends AbstractError {
  constructor(message: string) {
    super(message, 404);
  }
}

export default NotFoundError
