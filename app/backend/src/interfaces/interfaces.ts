interface ILogin {
  email: string;
  password: string;
}
interface IUser {
  id: number;
  email: string;
  username: string;
  role: string;
  password: string;
}

interface IInserePartida {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface IPartidaInserida extends IInserePartida{
  id: number;
  inProgress: boolean;
}

export {
  ILogin,
  IUser,
  IInserePartida,
  IPartidaInserida,
};
