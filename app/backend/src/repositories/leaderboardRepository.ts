import queryRanking from '../utils/queryRanking';
import sequelize from '../database/models';

export default class LeaderboardRepository {
  getRankingHome = async () => {
    const ranking = await sequelize.query(
      `SELECT t.team_name as name,
      SUM(IF(m.home_team_goals>m.away_team_goals,3,IF(m.home_team_goals=m.away_team_goals,1,0)))
       AS totalPoints,
      COUNT(m.home_team_goals OR m.away_team_goals) AS totalGames,
      SUM(IF (m.home_team_goals > m.away_team_goals,1,0)) AS totalVictories,
      SUM(IF (m.home_team_goals = m.away_team_goals,1,0)) AS totalDraws,
      SUM(IF (m.home_team_goals < m.away_team_goals,1,0)) AS totalLosses,
      SUM(m.home_team_goals) as goalsFavor, SUM(m.away_team_goals) as goalsOwn,
      SUM(m.home_team_goals) - SUM(m.away_team_goals) as goalsBalance,
      ROUND((SUM(IF(m.home_team_goals>m.away_team_goals,3,
        IF(m.home_team_goals=m.away_team_goals,1,0)))/
        (COUNT(m.home_team_goals OR m.away_team_goals)*3))*100,2) AS efficiency
      FROM TRYBE_FUTEBOL_CLUBE.matches as m INNER JOIN TRYBE_FUTEBOL_CLUBE.teams as t
      ON m.home_team = t.id WHERE in_progress = false GROUP BY t.team_name
      ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn`,
    );
    return ranking;
  };

  getRankingAway = async () => {
    const ranking = await sequelize.query(
      `SELECT t.team_name as name,
      SUM(IF(m.home_team_goals<m.away_team_goals,3,IF(m.home_team_goals=m.away_team_goals,1,0)))
       AS totalPoints,
      COUNT(m.home_team_goals OR m.away_team_goals) AS totalGames,
      SUM(IF (m.home_team_goals < m.away_team_goals,1,0)) AS totalVictories,
      SUM(IF (m.home_team_goals = m.away_team_goals,1,0)) AS totalDraws,
      SUM(IF (m.home_team_goals > m.away_team_goals,1,0)) AS totalLosses,
      SUM(m.away_team_goals) as goalsFavor, SUM(m.home_team_goals) as goalsOwn,
      SUM(m.away_team_goals) - SUM(m.home_team_goals) as goalsBalance,
      ROUND((SUM(IF(m.home_team_goals<m.away_team_goals,3,
        IF(m.home_team_goals=m.away_team_goals,1,0)))/
        (COUNT(m.home_team_goals OR m.away_team_goals)*3))*100,2) AS efficiency
      FROM TRYBE_FUTEBOL_CLUBE.matches as m INNER JOIN TRYBE_FUTEBOL_CLUBE.teams as t
      ON m.away_team = t.id WHERE in_progress = false GROUP BY t.team_name
      ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn`,
    );
    return ranking;
  };

  getRanking = async () => {
    const ranking = await sequelize.query(
      queryRanking,
    );
    return ranking;
  };
}
