import type { Request, Response, NextFunction } from 'express';
import { ForbiddenError, ERROR_MESSAGE } from '../errors'
const { 
  NODE_ENV
} =  process.env;

const checkAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (NODE_ENV === 'dev') {
    next()
    return
  }
  if ('user' in (req.cookies || {}) ) {
    try {
      res.locals.user = JSON.parse(req.cookies.user);
      next();
    } catch (e) {
      next(new ForbiddenError(ERROR_MESSAGE.COOKIE_ERROR_MESSAGE));
    }
  } else {
    next(new ForbiddenError(ERROR_MESSAGE.AUTH_ERROR_MESSAGE));
  }
};

export default checkAuthMiddleware;