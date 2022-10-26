import { Router } from 'express';
import { MatchController } from '../controllers';
import { MatchRepository } from '../repositories';
import { MatchService } from '../services';

const router = Router();
const matchRepository = new MatchRepository();
const matchService = new MatchService(matchRepository);
const matchController = new MatchController(matchService);

router.get('/', matchController.getAllMatches);
// router.get('/:id', MatchController.getMatchById);

export default router;
