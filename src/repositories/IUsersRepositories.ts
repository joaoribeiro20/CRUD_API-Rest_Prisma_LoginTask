import { User } from "../entities/User";

interface IUsersRepository {
  create(user: User): Promise<User>;
  exists(email: string): Promise<boolean>;
  search(email: string, id: string): Promise<User>;
  searchID(id: string): Promise<User>;
}

export { IUsersRepository };