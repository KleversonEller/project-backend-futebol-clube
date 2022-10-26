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
    return todosTimes;
  };

  getTeamById = async (id: number) => {
    console.log('id na repo >>>>>>>>', id);

    const time = await TeamModel.findByPk(id, { raw: true });
    console.log('time na repo >>>>>>>>', time);

    return time;
  };
}
