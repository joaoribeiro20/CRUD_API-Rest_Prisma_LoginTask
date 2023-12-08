import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

interface IUserRequest {
  email: string;
  password: string;
  id: string
}

class GetOneUserService {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ email, password, id }: IUserRequest) {
    if (email != '') {
      const userAlreadyExists = await this.usersRepository.exists(email);

      if (!userAlreadyExists) {
        throw new Error("User already exists!");
      }

      const user = await this.usersRepository.search(email, id);
      if (password != user.password) {
        throw new Error("invalid password");
      }

      return user;

    } else if (id != '') {

      const user = await this.usersRepository.search(email, id);
      if (password != user.password) {
        throw new Error("ID already exists!");
      }
      return user;

    }
  }
}

export { GetOneUserService };