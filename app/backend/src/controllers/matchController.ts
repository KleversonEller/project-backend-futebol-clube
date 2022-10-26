import { Request, Response } from 'express';
import { MatchService } from '../services';
import 'express-async-errors';

export default class MatchController {
  service;
  constructor(matchService: MatchService) {
    this.service = matchService;
  }

  getAllMatches = async (_req: Request, res: Response):Promise<Response> => {
    const todasPartidas = await this.service.getAllMatches();
    return res.status(200).json(todasPartidas);
  };

  // getMatchById = async (req: Request, res: Response):Promise<Response> => {
  //   const time = await this.service.getMatchById(Number(req.params.id));
  //   return res.status(200).json(time);
  // };

  // validate = async (req: Request, res: Response):Promise<Response> => {
  //   const user = await this.service.validate(req.headers.authorization as string);
  //   console.log('user na controller >>>>>>', user);
  //   const { role } = user;
  //   console.log('role na controller >>>>>>', role);
  //   return res.status(200).json({ role });
  // };
}
