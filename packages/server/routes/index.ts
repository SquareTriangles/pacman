import userRoute from './user'
import type * as core from 'express-serve-static-core';

const initRoutes = (app:core.Express) => {
  app.use('/user', userRoute);
}

export default initRoutes;