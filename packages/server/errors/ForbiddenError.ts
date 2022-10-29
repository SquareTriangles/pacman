import AbstractError from "./AbstractError";

class ForbiddenError extends AbstractError {
  constructor(message: string) {
    super(message, 403);
  }
}

export default ForbiddenError;
