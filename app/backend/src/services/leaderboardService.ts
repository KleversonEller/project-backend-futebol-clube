// import * as jwt from 'jsonwebtoken';
// import { Secret } from 'jsonwebtoken';
// import * as bcrypt from 'bcryptjs';
import { LeaderboardRepository } from '../repositories';
// import { ILogin, IUser } from '../interfaces/interfaces';
// import ErrorGenerate from '../utils/ErrorGenerate';
// import UserModel from '../database/models/UserModel';

// const secret = process.env.JWT_SECRET;

export default class LeaderboardService {
  repository;
  constructor(leaderboardRepository: LeaderboardRepository) {
    this.repository = leaderboardRepository;
  }

  async getRankingHome() {
    const ranking = await this.repository.getRankingHome();
    return ranking;
  }

  async getRankingAway() {
    const ranking = await this.repository.getRankingAway();
    return ranking;
  }

  async getRanking() {
    const ranking = await this.repository.getRanking();
    return ranking;
  }
}
