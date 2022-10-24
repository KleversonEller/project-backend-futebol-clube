import { Model, INTEGER } from 'sequelize';
import db from '.';
import TeamModel from './TeamModel';

export default class MatchModel extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: number;
}

MatchModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

MatchModel.belongsTo(TeamModel, { foreignKey: 'homeTeam', as: 'timeLocal' });
MatchModel.belongsTo(TeamModel, { foreignKey: 'awayTeam', as: 'timeVisitante' });

TeamModel.hasMany(MatchModel, { foreignKey: 'homeTeam', as: 'timeLocal' });
TeamModel.hasMany(MatchModel, { foreignKey: 'awayTeam', as: 'timeVisitante' });
