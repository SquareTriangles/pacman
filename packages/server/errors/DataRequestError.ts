import AbstractError from "./Abstracterror";

class DataRequestError extends AbstractError {
  constructor(message: string) {
    super(message, 400);
  }
}

export default DataRequestError;
