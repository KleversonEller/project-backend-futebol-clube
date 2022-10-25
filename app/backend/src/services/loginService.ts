import UserRepository from '../repositories';
import { ILogin } from '../interfaces/interfaces';
import ErrorGenerate from '../utils/ErrorGenerate';
import UserModel from '../database/models/UserModel';

export default class LoginService {
  repository;
  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  async login(user: ILogin) {
    const findUser: UserModel | null = await this.repository.findUser(user);
    if (!findUser?.email) throw new ErrorGenerate(400, 'Usuário não cadastrado');
  }
}
