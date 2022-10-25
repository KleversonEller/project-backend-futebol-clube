import { Request, Response } from 'express';
import LoginService from '../services';

export default class LoginController {
  token: string;
  service;
  constructor(loginService: LoginService) {
    this.token = 'sdfsdfsdf';
    this.service = loginService;
  }

  login = (_req: Request, res: Response): Response => {
    console.log('kkkkkkkkkkkkkkkk');

    return res.status(200).json({ token: this.token });
  };
}
