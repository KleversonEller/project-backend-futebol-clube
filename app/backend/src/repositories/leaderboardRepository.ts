import sequelize from '../database/models';

export default class LeaderboardRepository {
  getRanking = async () => {
    const ranking = await sequelize.query(
      `SELECT t.team_name as name
      FROM TRYBE_FUTEBOL_CLUBE.matches as m
      INNER JOIN TRYBE_FUTEBOL_CLUBE.teams as t
      ON m.home_team = t.id
      WHERE in_progress = false`,
    );
    return ranking;
  };
}
