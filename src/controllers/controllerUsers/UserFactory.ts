import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "../../Model/serviceUser/CreateUserService";
import { GetOneUserService } from "../../Model/serviceUser/GetOneUserService";
import { GetOneUserController } from "./GetOneUserController";

import { GetUserIDService } from "../../Model/serviceUser/GetUserIDService"
import { GetUserIDController } from "./GetUserIDController";

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

export const getUserID = () => {
  const usersRepository = new PrismaUsersRepository();
  const getUser = new GetUserIDService(usersRepository);
  const getUserID = new GetUserIDController(getUser);
  return getUserID;
};

