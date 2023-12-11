import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

interface IUserRequest {
    id: string;
    email: string;
    password: string;
    name: string ;
    telefone: number;
    apelido: string;
    cep: number;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password, telefone, apelido, cep }: IUserRequest) {
    const userAlreadyExists = await this.usersRepository.exists(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const userCreate = User.create({ name, email, password, telefone, apelido, cep });
    const user = await this.usersRepository.create(userCreate);
    return user;
  }
}

export { CreateUserService };