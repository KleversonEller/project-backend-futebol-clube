import { Router } from 'express';
import { MatchController } from '../controllers';
import { MatchRepository } from '../repositories';
import { MatchService } from '../services';
import validaToken from '../middlewares/validaToken';

const router = Router();
const matchRepository = new MatchRepository();
const matchService = new MatchService(matchRepository);
const matchController = new MatchController(matchService);

router.get('/', matchController.getMatchesInProgress);
router.get('/', matchController.getAllMatches);
router.post('/', validaToken, matchController.addMatch);
router.patch('/:id/finish', matchController.updateProgress);

export default router;
