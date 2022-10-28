import { Router } from 'express';
import { LeaderboardController } from '../controllers';
import { LeaderboardRepository } from '../repositories';
import { LeaderboardService } from '../services';

const router = Router();
const leaderboardRepository = new LeaderboardRepository();
const leaderboardService = new LeaderboardService(leaderboardRepository);
const leaderboardController = new LeaderboardController(leaderboardService);

router.get('/home', leaderboardController.getRankingHome);
router.get('/away', leaderboardController.getRankingAway);
router.get('/', leaderboardController.getRanking);

export default router;
