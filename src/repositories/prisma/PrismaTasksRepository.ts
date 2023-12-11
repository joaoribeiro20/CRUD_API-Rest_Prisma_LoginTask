import { error } from "console";
import prisma from "../../database/Client";
import { Task } from "../../entities/Task";

import { ITasksRepository } from "../ITasksRepositories";



class PrismaTasksRepository implements ITasksRepository {

  async exists(id: string): Promise<boolean> {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    return !!task;
  }

  async create({ title, description, categories, authorId }: Task): Promise<Task> {
    const NewTask = await prisma.task.create({
      data: {
        title,
        description,
        categories,
          author: {
              connect: {
                  id: authorId
              }
          }
      }
  });
  return NewTask
  }

  async search(authorId: string): Promise<Task[]> {
    const task = await prisma.task.findMany({
      where: {
        authorId,
      },
    });
    if(!task){
      throw new Error("Nenhuma task encontrada com esse id");
  }

    return task;
  }

  async edit({id, title, description, categories, statu, authorId }: Task): Promise<Task> {
    const result = await prisma.task.update({
      where: { id:id },
      data: {
         title:title,
         description:description,
         categories:categories,
         statu:statu,
         authorId:authorId
      },
    })
    return result
  }

  async delete(id: string): Promise<Task> {
    const result = await prisma.task.delete({
      where: { id },
    })

    return result

  }
 
}

export { PrismaTasksRepository };