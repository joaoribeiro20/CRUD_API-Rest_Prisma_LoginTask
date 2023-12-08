import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "../../Model/servicesUser/CreateUserService";
import { GetOneUserService } from "../../Model/servicesUser/GetOneUserService";
import { GetOneUserController } from "./GetOneUserController";

export const createUser = () => {
  const usersRepository = new PrismaUsersRepository();
  const createUser = new CreateUserService(usersRepository);
  const createUserController = new CreateUserController(createUser);
  return createUserController;
};


export const getOneUser = () => {
  const usersRepository = new PrismaUsersRepository();
  const getUser = new GetOneUserService(usersRepository);
  const getOneUser = new GetOneUserController(getUser);
  return getOneUser;
};