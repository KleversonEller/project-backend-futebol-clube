import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validaLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  console.log(error);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};
export {
  validaLogin,
  loginSchema,
};
