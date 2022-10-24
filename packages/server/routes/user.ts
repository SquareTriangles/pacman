import { celebrate, Joi } from 'celebrate'
import { createUserController } from '../controlers/user'
import router from 'express';
import { stringErrorMessageBuilder } from '../errors'
import type { ErrorReport } from 'joi';

const Router = router.Router()

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

export default Router;

