abstract class AbstractError extends Error {
  declare statusCode: number
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default AbstractError;
