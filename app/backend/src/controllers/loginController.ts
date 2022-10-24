import { Request, Response } from 'express';

export default class LoginController {
  token: string;
  constructor() {
    this.token = 'sdfsdfsdf';
  }

  login = (_req: Request, res: Response): Response => {
    console.log('kkkkkkkkkkkkkkkk');

    return res.status(200).json({ token: this.token });
  };
}
