import { Request, Response } from 'express';
import { LeaderboardService } from '../services';
import 'express-async-errors';

export default class LeaderboardController {
  service;
  constructor(leaderboardService: LeaderboardService) {
    this.service = leaderboardService;
  }

  //!  TESTE

  getRankingHome = async (_req: Request, res: Response):Promise<Response> => {
    const [ranking] = await this.service.getRankingHome();
    return res.status(200).json(ranking);
  };

  getRankingAway = async (_req: Request, res: Response):Promise<Response> => {
    const [ranking] = await this.service.getRankingAway();
    return res.status(200).json(ranking);
  };

  getRanking = async (_req: Request, res: Response):Promise<Response> => {
    const [ranking] = await this.service.getRanking();
    return res.status(200).json(ranking);
  };
}
