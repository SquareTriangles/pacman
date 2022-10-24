import AbstractError from "./Abstracterror";
class AuthorisationError extends AbstractError {
  constructor(message: string) {
    super(message, 401);
  }
}

export default AuthorisationError;
