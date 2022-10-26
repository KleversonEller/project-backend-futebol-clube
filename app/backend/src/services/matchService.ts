// import * as jwt from 'jsonwebtoken';
// import { Secret } from 'jsonwebtoken';
// import * as bcrypt from 'bcryptjs';
import { IInserePartida, IPartidaInserida } from '../interfaces/interfaces';
import { MatchRepository, TeamRepository } from '../repositories';
// import { ILogin, IUser } from '../interfaces/interfaces';
import ErrorGenerate from '../utils/ErrorGenerate';
// import UserModel from '../database/models/UserModel';

// const secret = process.env.JWT_SECRET;

export default class MatchService {
  repository;
  teamRepository;
  constructor(matchRepository: MatchRepository) {
    this.repository = matchRepository;
    this.teamRepository = new TeamRepository();
  }

  async getAllMatches() {
    const todasPartidas = await this.repository.getAllMatches();
    return todasPartidas;
  }

  async getMatchesInProgress(andamento: boolean) {
    const partidasEmAndamento = await this.repository.getMatchesInProgress(andamento);
    return partidasEmAndamento;
  }

  async addMatch(partida: IInserePartida) : Promise<IPartidaInserida> {
    if (partida.awayTeam === partida.homeTeam) {
      throw new ErrorGenerate(422, 'It is not possible to create a match with two equal teams');
    }
    const homeTeam = await this.teamRepository.getTeamById(partida.homeTeam);
    const awayTeam = await this.teamRepository.getTeamById(partida.awayTeam);
    if (!homeTeam || !awayTeam) {
      throw new ErrorGenerate(404, 'There is no team with such id!');
    }

    const partidaInserida = await this.repository.addMatch(partida);
    return partidaInserida;
  }

  async updateProgress(id: number) : Promise<void> {
    await this.repository.updateProgress(id);
  }

  // async getMatchById(id: number) {
  //   console.log('id na service >>>>>>>>', id);
  //   const time = await this.repository.getMatchById(id);
  //   return time;
  // }

  // async login(user: ILogin) {
  //   const findUser: UserModel | null = await this.repository.findUser(user);
  //   if (!findUser?.email) throw new ErrorGenerate(401, 'Incorrect email or password');
  //   const passwordDB = findUser.password;
  //   const comparaSenha = bcrypt.compareSync(user.password, passwordDB);
  //   if (!comparaSenha) throw new ErrorGenerate(401, 'Incorrect email or password');
  //   const token = this.geraToken(findUser);
  //   return token;
  // }

  // private geraToken = (user: IUser): Secret => {
  //   const payload = { ...user };
  //   const token = jwt.sign(payload, secret as Secret);
  //   return token as Secret;
  // };

  // validate = async (token: string) => {
  //   // console.log('token na service >>>>>>', token);

  //   const user = jwt.verify(token, secret as Secret);
  //   // console.log('user na service >>>>>>', user);

  //   return user as IUser;
  // };
}
