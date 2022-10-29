import AbstractError from "./AbstractError";

class DataRequestError extends AbstractError {
  constructor(message: string) {
    super(message, 400);
  }
}

export default DataRequestError;
