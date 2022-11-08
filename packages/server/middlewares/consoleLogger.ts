import type { Request, Response, NextFunction } from 'express';

const consoleLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log('==========================')
  console.log(req)
  next()
}

export default consoleLogger;
