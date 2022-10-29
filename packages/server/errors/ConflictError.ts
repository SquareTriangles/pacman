import AbstractError from "./AbstractError";

class ConflictError extends AbstractError {
  constructor(message: string) {
    super(message, 409);
  }
}

export default ConflictError;
