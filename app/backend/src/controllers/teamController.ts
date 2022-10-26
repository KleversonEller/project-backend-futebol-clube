import { Request, Response } from 'express';
import { TeamService } from '../services';
import 'express-async-errors';

export default class TeamController {
  service;
  constructor(teamService: TeamService) {
    this.service = teamService;
  }

  getAllTeams = async (_req: Request, res: Response):Promise<Response> => {
    const todosTimes = await this.service.getAllTeams();
    return res.status(200).json(todosTimes);
  };

  getTeamById = async (req: Request, res: Response):Promise<Response> => {
    const time = await this.service.getTeamById(Number(req.params.id));
    return res.status(200).json(time);
  };

  // validate = async (req: Request, res: Response):Promise<Response> => {
  //   const user = await this.service.validate(req.headers.authorization as string);
  //   console.log('user na controller >>>>>>', user);
  //   const { role } = user;
  //   console.log('role na controller >>>>>>', role);
  //   return res.status(200).json({ role });
  // };
}
