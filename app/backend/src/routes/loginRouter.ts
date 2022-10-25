import { Router } from 'express';
import LoginController from '../controllers';
import UserRepository from '../repositories';
import LoginService from '../services';
import { validaLogin } from '../middlewares/validadores';

const router = Router();
const userRepository = new UserRepository();
const loginService = new LoginService(userRepository);
const loginController = new LoginController(loginService);

router.post('/', validaLogin, loginController.login);
router.get('/validate', loginController.validate);

export default router;
