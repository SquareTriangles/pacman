import { Joi } from 'celebrate'
import { stringErrorMessageBuilder } from '../errors'

export const idRule                 = Joi.string().guid({version: ['uuidv4']}).required().messages(stringErrorMessageBuilder('id'));
export const userIdRule             = Joi.string().required().messages(stringErrorMessageBuilder('id'));
export const FirstNameRule          = Joi.string().min(5).max(32).required().messages(stringErrorMessageBuilder('firstName'));
export const LastNameRule           = Joi.string().min(5).max(32).required().messages(stringErrorMessageBuilder('lastName'));
export const AvatarRule             = Joi.string().required().allow(null).messages(stringErrorMessageBuilder('avatar'));
export const EmailRule              = Joi.string().required().email().messages(stringErrorMessageBuilder('email'));
export const LoginRule              = Joi.string().min(5).max(32).required().messages(stringErrorMessageBuilder('login'));
export const TopicBodyRule          = Joi.string().required().messages(stringErrorMessageBuilder('body'));
export const TopicHeaderRule        = Joi.string().required().messages(stringErrorMessageBuilder('header'));
export const QuestionCommentIdRule  = idRule.allow(null)
export const ThemeRule              = Joi.string()