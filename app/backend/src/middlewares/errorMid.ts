import { NextFunction, Request, Response } from 'express';
import ErrorGenerate from '../utils/ErrorGenerate';

const erro = (err: ErrorGenerate, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as ErrorGenerate;
  res.status(status || 500).json({ message });
};

export default erro;
