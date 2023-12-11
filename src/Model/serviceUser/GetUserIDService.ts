import prisma from "../../database/Client";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

interface IUserRequest {
  email: string;
  password: string;
  id: string
}

class GetUserIDService {
  constructor(private usersRepository: IUsersRepository) { }

  async execute(id: string) {
    const result = await this.usersRepository.searchID(id)

    return result
  }
}


export { GetUserIDService };