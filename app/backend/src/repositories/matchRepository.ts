// import { JwtPayload } from 'jsonwebtoken';
import TeamModel from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';
import { IInserePartida, IPartidaInserida } from '../interfaces/interfaces';

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

  getMatchesInProgress = async (andamento: boolean) => {
    const partidasEmAndamento = await MatchModel.findAll({
      where: { inProgress: andamento },
      include: [
        { model: TeamModel, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamModel, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return partidasEmAndamento;
  };

  addMatch = async (partida: IInserePartida): Promise<IPartidaInserida> => {
    const partidaInserida = await MatchModel.create({ ...partida, inProgress: true });

    console.log('partidaInserida na repo >>>>>>>>', partidaInserida);

    return partidaInserida as unknown as IPartidaInserida;
  };

  // getMatchById = async (id: number) => {

  //   const time = await MatchModel.findByPk(id, { raw: true });
  //   console.log('time na repo >>>>>>>>', time);

  //   return time;
  // };
}
