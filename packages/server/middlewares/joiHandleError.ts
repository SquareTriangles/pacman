import { isCelebrateError } from 'celebrate';
import type { Request, Response, NextFunction } from 'express';
import { AbstractError, DataRequestError } from '../errors';

const joiHandleError = (err: AbstractError | Error, req: Request, res: Response, next: NextFunction) => {
  if (!isCelebrateError(err)) {
    console.log('ERROR == ', err)
    return next(err);
  }
  const {
    details,
  } = err;
  const messages: Array<string> = [];
  details.forEach((item) => {
    messages.push(item.details[0].message)
  })
  next(new DataRequestError(messages.join(' , ')))
}

export default joiHandleError;
