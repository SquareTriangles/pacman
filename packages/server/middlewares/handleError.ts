import type { Request, Response, NextFunction } from 'express';
import { AbstractError, ERROR_MESSAGE } from '../errors';

const handleError = (err: AbstractError | Error, req: Request, res: Response, next: NextFunction) => {
  const { message } = err;
  let statusCode =  500;
  if ('statusCode' in err) {
    statusCode = err.statusCode;
  }
  console.log('ERROR ', err)
  res.status(statusCode).send({ message: statusCode === 500 ? ERROR_MESSAGE.SERVER_ERROR_MESSAGE : message });
  next();
}

export default handleError;

