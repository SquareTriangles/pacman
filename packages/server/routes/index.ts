import userRoute from './user'
import topicRoute from './topic'
import type * as core from 'express-serve-static-core';

const initRoutes = (app:core.Express) => {
  app.use('/user', userRoute);
  app.use('/topic', topicRoute);
}

export default initRoutes;