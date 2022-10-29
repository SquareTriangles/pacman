import AbstractError from "./Abstracterror";

class ForbiddenError extends AbstractError {
  constructor(message: string) {
    super(message, 403);
  }
}

export default ForbiddenError;
