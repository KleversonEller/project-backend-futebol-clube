import { Router } from 'express';
import { LeaderboardController } from '../controllers';
import { LeaderboardRepository } from '../repositories';
import { LeaderboardService } from '../services';

const router = Router();
const leaderboardRepository = new LeaderboardRepository();
const leaderboardService = new LeaderboardService(leaderboardRepository);
const leaderboardController = new LeaderboardController(leaderboardService);

router.get('/home', leaderboardController.getRanking);

export default router;
