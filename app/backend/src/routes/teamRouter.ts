import { Router } from 'express';
import { TeamController } from '../controllers';
import { TeamRepository } from '../repositories';
import { TeamService } from '../services';

const router = Router();
const teamRepository = new TeamRepository();
const teamService = new TeamService(teamRepository);
const teamController = new TeamController(teamService);

router.get('/', teamController.getAllTeams);
router.get('/:id', teamController.getTeamById);

export default router;
