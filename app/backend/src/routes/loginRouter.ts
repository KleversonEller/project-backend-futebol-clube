import { Router } from 'express';
import LoginController from '../controllers';
import UserRepository from '../repositories';
import LoginService from '../services';

const router = Router();
const userRepository = new UserRepository();
const loginService = new LoginService(userRepository);
const loginController = new LoginController(loginService);

router.post('/', loginController.login);

export default router;
