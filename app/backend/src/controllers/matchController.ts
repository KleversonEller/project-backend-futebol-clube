import { Request, Response, NextFunction } from 'express';
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

  getMatchesInProgress = async (req: Request, res: Response, next: NextFunction)
  :Promise<Response | void> => {
    const { inProgress } = req.query;
    if (!inProgress) {
      return next();
    }
    const andamento = inProgress === 'true';
    console.log('inProgress na controller >>>>>>>> ', inProgress);
    const partidasEmAndamento = await this.service.getMatchesInProgress(andamento);
    return res.status(200).json(partidasEmAndamento);
  };

  addMatch = async (req: Request, res: Response) :Promise<Response> => {
    const partidaInserida = await this.service.addMatch(req.body);
    return res.status(201).json(partidaInserida);
  };

  updateProgress = async (req: Request, res: Response) :Promise<Response> => {
    await this.service.updateProgress(Number(req.params.id));
    return res.status(200).json({ message: 'Finished' });
  };

  updateGoals = async (req: Request, res: Response) :Promise<Response> => {
    await this.service.updateGoals(Number(req.params.id), req.body);
    return res.status(200).json({ message: 'Gols atualizados' });
  };
}
