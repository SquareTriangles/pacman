import userRoute from './user'
import topicRoute from './topic'
import commentRoute from './comment'
import type * as core from 'express-serve-static-core';
import { checkAuthMiddleware } from '../middlewares/index'

const initRoutes = (app:core.Express) => {
  app.use(checkAuthMiddleware);
  app.use('/user', userRoute);
  app.use('/topic', topicRoute);
  app.use('/comment', commentRoute)
}

export default initRoutes;