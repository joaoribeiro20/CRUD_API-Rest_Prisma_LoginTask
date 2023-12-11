import { PrismaTasksRepository } from "../../repositories/prisma/PrismaTasksRepository";

import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskService } from "../../Model/serviceTask/CreateTaskService";

import { GetAllTasksController } from "./GetAllTasksController";
import { GetAllTasksService } from "../../Model/serviceTask/GetAllTasksService";

import { DeleteTaskService } from "../../Model/serviceTask/DeleteTaskService";
import { DeleteTaskController } from "./DeleteTaskController";
import { EditTaskService } from "../../Model/serviceTask/EditTaskService";
import { EditTaskController } from "./EditTaskController";

export const createTask = () => {
  const taskRepository = new PrismaTasksRepository();
  const createTask = new CreateTaskService(taskRepository);
  const createTaskController = new CreateTaskController(createTask);
  return createTaskController;
};


export const getTask = () => {
  const taskRepository = new PrismaTasksRepository();
  const getTask = new GetAllTasksService(taskRepository);
  const getTaskController = new GetAllTasksController(getTask);
  return getTaskController;
}; 


export const deleteTask = () => {
  const taskRepository = new PrismaTasksRepository();
  const deleteTask = new DeleteTaskService(taskRepository);
  const deleteTaskController = new DeleteTaskController(deleteTask);
  return deleteTaskController;
}; 

export const editTask = () => {
  const taskRepository = new PrismaTasksRepository();
  const editTask = new EditTaskService(taskRepository);
  const editTaskController = new EditTaskController(editTask);
  return editTaskController;
}; 