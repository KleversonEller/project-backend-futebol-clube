import { Router } from 'express';
import LoginController from '../controllers';
import UserRepository from '../repositories';
import LoginService from '../services';
import { validaLogin } from '../middlewares/validadores';
import validaToken from '../middlewares/validaToken';

const router = Router();
const userRepository = new UserRepository();
const loginService = new LoginService(userRepository);
const loginController = new LoginController(loginService);

router.post('/', validaLogin, loginController.login);
router.get('/validate', validaToken, loginController.validate);

export default router;
