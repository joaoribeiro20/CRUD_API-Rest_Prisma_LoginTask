import { error } from "console";
import prisma from "../../database/Client";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";



class PrismaUsersRepository implements IUsersRepository {

  async search(email: string, id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        tasks: true, // Assuming you have a relation named 'tasks' in your User model
      },
    })

    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async exists(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return !!user;
  }

  async create({ name, email, password, telefone, apelido, cep, }: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        telefone,
        apelido,
        cep,
      },
    });

    return user;
  }

  async searchID(id: string): Promise<User> {
    const result = await prisma.user.findUnique({
      where: {
        id: id
      },
      include: {
        tasks: true,
      },
    });


    if (!result) {
      throw new Error("User not found");
    }

    return result
  }
}

export { PrismaUsersRepository };