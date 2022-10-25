import UserModel from '../database/models/UserModel';
import { ILogin } from '../interfaces/interfaces';

export default class UserRepository {
//   model;
//   constructor() {
//     this.model = new UserModel();
//   }

  findUser = async (user: ILogin) => {
    const { email } = user;
    const userFound = await UserModel.findOne({
      where: { email } });
    // console.log('zzzzzzzz', userFound);

    return userFound;
  };
}
