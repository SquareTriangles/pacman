import { celebrate, Joi } from 'celebrate'
import { 
  createTopicController,
  updateTopicController,
  removeTopicController,
  getAllTopicController,
  getTopicByIdController,
} from '../controlers/topic'
import router from 'express';
import * as JoiRules from './JoiRules';

const Router = router.Router()

Router.delete('/id', celebrate({
  query: Joi.object().keys({
    id: JoiRules.idRule,
  }),
}), removeTopicController);

Router.get('/id', celebrate({
  query: Joi.object().keys({
    id: JoiRules.idRule,
  }),
}), getTopicByIdController);

Router.post('/', celebrate({
  body: Joi.object().keys({
    header: JoiRules.FirstNameRule,
    body: JoiRules.TopicBodyRule,
    owner: JoiRules.TopicHeaderRule,
  })
}), createTopicController);

Router.put('/', celebrate({
  body: Joi.object().keys({
    id: JoiRules.idRule,
    header: JoiRules.FirstNameRule,
    body: JoiRules.TopicBodyRule,
    owner: JoiRules.TopicHeaderRule,
  })
}), updateTopicController);


Router.get('/all', getAllTopicController);

export default Router;