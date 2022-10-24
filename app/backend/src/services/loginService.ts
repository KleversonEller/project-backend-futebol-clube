export default class LoginService {
  repository;
  constructor() {
    this.repository = new UserRepository();
  }
}
