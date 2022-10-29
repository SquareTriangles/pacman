import AbstractError from "./Abstracterror";

class ConflictError extends AbstractError {
  constructor(message: string) {
    super(message, 409);
  }
}

export default ConflictError;
