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
export {
  ILogin,
  IUser,
};
