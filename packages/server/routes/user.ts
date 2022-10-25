import { celebrate, Joi } from 'celebrate'
import { 
  createUserController,
  updateUserController,
} from '../controlers/user'
import router from 'express';
import { stringErrorMessageBuilder } from '../errors'

const Router = router.Router()

const idRule        = Joi.string().guid({version: ['uuidv4']}).required().messages(stringErrorMessageBuilder('id'));
const FirstNameRule = Joi.string().min(5).max(32).required().messages(stringErrorMessageBuilder('firstName'));
const LastNameRule  = Joi.string().min(5).max(32).required().messages(stringErrorMessageBuilder('lastName'));
const AvatarRule    = Joi.string().required().uri().messages(stringErrorMessageBuilder('avatar'));
const EmailRule     = Joi.string().required().email().messages(stringErrorMessageBuilder('email'));
const LoginRule     = Joi.string().min(5).max(32).required().messages(stringErrorMessageBuilder('login'));

Router.post('/', celebrate({
  body: Joi.object().keys({
    firstName: FirstNameRule,
    lastName: LastNameRule,
    avatar: AvatarRule,
    email: EmailRule,
    login: LoginRule,
  })
}), createUserController);

Router.put('/', celebrate({
  body: Joi.object().keys({
    id: idRule,
    firstName: FirstNameRule,
    lastName: LastNameRule,
    avatar: AvatarRule,
    email: EmailRule,
    login: LoginRule,
  })
}), updateUserController);

export default Router;

