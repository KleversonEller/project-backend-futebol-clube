import { JwtPayload } from 'jsonwebtoken';
import UserModel from '../database/models/UserModel';
import { ILogin } from '../interfaces/interfaces';

export default class UserRepository {
//   model;
//   constructor() {
//     this.model = new UserModel();
//   }

  findUser = async (user: ILogin | JwtPayload) => {
    const { email } = user;
    const userFound: UserModel | string | null = await UserModel.findOne({
      where: { email }, raw: true });
    // console.log('zzzzzzzz', userFound);

    return userFound;
  };
}
