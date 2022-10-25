import UserModel from '../database/models/UserModel';
import { ILogin } from '../interfaces/interfaces';

export default class UserRepository {
//   model;
//   constructor() {
//     this.model = new UserModel();
//   }

  findUser = async (user: ILogin) => {
    const { email } = user;
    const result = await UserModel.findOne({
      attributes: { exclude: ['password'] },
      where: { email } });
    return result;
  };
}
