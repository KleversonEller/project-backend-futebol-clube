import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

const camposVazios = 'All fields must be filled';

const loginSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': camposVazios,
      'string.empty': camposVazios }),
  password: Joi.string().min(6).required()
    .messages({
      'any.required': camposVazios,
      'string.empty': camposVazios }),
});

const validaLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};
export {
  validaLogin,
  loginSchema,
};
