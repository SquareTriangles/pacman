import { celebrate, Joi } from 'celebrate'
import { 
  createCommentController,
  updateCommentController,
  removeCommentController,
  getAllCommentController,
  getCommentByTopicIdController,
  getAnswerListController,
} from '../controlers/comment'
import router from 'express';
import * as JoiRules from './JoiRules';

const Router = router.Router()

Router.delete('/id', celebrate({
  query: Joi.object().keys({
    id: JoiRules.idRule,
  }),
}), removeCommentController);

Router.get('/id', celebrate({
  query: Joi.object().keys({
    id: JoiRules.idRule,
  }),
}), getCommentByTopicIdController);

Router.get('/answer', celebrate({
  query: Joi.object().keys({
    id: JoiRules.idRule,
  }),
}), getAnswerListController);

Router.post('/', celebrate({
  body: Joi.object().keys({
    body: JoiRules.TopicBodyRule,
    topic: JoiRules.idRule,
    owner: JoiRules.userIdRule,
    questionCommentId: JoiRules.QuestionCommentIdRule,
  })
}), createCommentController);

Router.put('/', celebrate({
  body: Joi.object().keys({
    id: JoiRules.idRule,
    body: JoiRules.TopicBodyRule,
    topic: JoiRules.idRule,
    owner: JoiRules.userIdRule,
    questionCommentId: JoiRules.QuestionCommentIdRule,
  })
}), updateCommentController);

Router.get('/all', getAllCommentController);

export default Router