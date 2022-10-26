// import { JwtPayload } from 'jsonwebtoken';
import TeamModel from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';
// import { ILogin } from '../interfaces/interfaces';

export default class MatchRepository {
  getAllMatches = async () => {
    const todasPartidas = await MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamModel, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return todasPartidas;
  };

  // getMatchById = async (id: number) => {
  //   console.log('id na repo >>>>>>>>', id);

  //   const time = await MatchModel.findByPk(id, { raw: true });
  //   console.log('time na repo >>>>>>>>', time);

  //   return time;
  // };
}
