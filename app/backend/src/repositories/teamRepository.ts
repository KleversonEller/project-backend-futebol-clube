// import { JwtPayload } from 'jsonwebtoken';
import TeamModel from '../database/models/TeamModel';
// import { ILogin } from '../interfaces/interfaces';

export default class TeamRepository {
//   model;
//   constructor() {
//     this.model = new TeamModel();
//   }

  getAllTeams = async () => {
    const todosTimes = await TeamModel.findAll({ raw: true });
    // console.log('zzzzzzzz', userFound);

    return todosTimes;
  };
}
