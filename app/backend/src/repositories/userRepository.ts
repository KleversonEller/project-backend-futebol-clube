import UserModel from '../database/models/UserModel';
import { login } from '../interfaces/interfaces';

export default class UserRepository {
  model: UserModel;
  constructor(userModel: UserModel) {
    this.model = userModel;
  }

  findUser(user: login) {
    const { email } = user;
    const result = await UserModel.findOne({
      attributes: { exclude: ['password'] },
      where: { email } });
    return result;
  }
}
