import { Request, Response } from 'express';
import LoginService from '../services';
import 'express-async-errors';

export default class LoginController {
  service;
  constructor(loginService: LoginService) {
    this.service = loginService;
  }

  login = async (req: Request, res: Response):Promise<Response> => {
    const token = await this.service.login(req.body);
    return res.status(200).json({ token });
  };

  validate = async (req: Request, res: Response):Promise<Response> => {
    const user = await this.service.validate(req.headers.authorization as string);
    const { role } = user;
    return res.status(200).json({ role });
  };
}
