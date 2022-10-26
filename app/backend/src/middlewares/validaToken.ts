import { Secret, JwtPayload } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';
import ErrorGenerate from '../utils/ErrorGenerate';

require('dotenv/config');

const secret = process.env.JWT_SECRET;

const validaToken = async (req: Request, _res:Response, next: NextFunction) => {
  const token: Secret | undefined = req.headers.authorization;
  if (!token) {
    const err = new ErrorGenerate(401, 'Token not found');
    return next(err);
  }
  try {
    jwt.verify(token, secret as string) as JwtPayload;
    console.log('xxxxxxxxxxxxxxxxxxx');

    next();
  } catch (err) {
    throw new ErrorGenerate(401, 'Invalid token');
  }
};

export default validaToken;
