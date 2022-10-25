import { celebrate, Joi } from 'celebrate'
import { 
  createUserController,
  updateUserController,
  getAllUsersController,
} from '../controlers/user'
import router from 'express';
import * as JoiRules from './JoiRules';

const Router = router.Router()

Router.get('/', getAllUsersController);

Router.post('/', celebrate({
  body: Joi.object().keys({
    firstName: JoiRules.FirstNameRule,
    lastName: JoiRules.LastNameRule,
    avatar: JoiRules.AvatarRule,
    email: JoiRules.EmailRule,
    login: JoiRules.LoginRule,
  })
}), createUserController);

Router.put('/', celebrate({
  body: Joi.object().keys({
    id: JoiRules.idRule,
    firstName: JoiRules.FirstNameRule,
    lastName: JoiRules.LastNameRule,
    avatar: JoiRules.AvatarRule,
    email: JoiRules.EmailRule,
    login: JoiRules.LoginRule,
  })
}), updateUserController);

export default Router;

