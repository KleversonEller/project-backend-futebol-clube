import * as jwt from 'jsonwebtoken';
import { Secret } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import UserRepository from '../repositories';
import { ILogin, IUser } from '../interfaces/interfaces';
import ErrorGenerate from '../utils/ErrorGenerate';
import UserModel from '../database/models/UserModel';

const secret = process.env.JWT_SECRET;

export default class LoginService {
  repository;
  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  async login(user: ILogin) {
    const findUser: UserModel | null = await this.repository.findUser(user);
    // console.log('findUser >>>>>>>>', findUser);
    if (!findUser?.email) throw new ErrorGenerate(401, 'Incorrect email or password');
    const passwordDB = findUser.password;
    const comparaSenha = bcrypt.compareSync(user.password, passwordDB);
    if (!comparaSenha) throw new ErrorGenerate(401, 'Incorrect email or password');
    const token = this.geraToken(findUser);
    return token;
  }

  private geraToken = (user: IUser): Secret => {
    const payload = { ...user };
    const token = jwt.sign(payload, secret as Secret);
    return token as Secret;
  };

  validate = async (token: string) => {
    const user = jwt.verify(token, secret as Secret);
    return user as IUser;
  };
}
