import Joi from 'joi';

export const UserValidateSchema = Joi.object().keys({
  username: Joi.string().trim().required(),
  password: Joi.string().trim().min(5).max(10).required()
});