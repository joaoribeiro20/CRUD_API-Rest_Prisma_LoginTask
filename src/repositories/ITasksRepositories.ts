import { Task } from "../entities/Task";

interface ITasksRepository { 
  exists(id: string): Promise<boolean>;

  create(task: Task): Promise<Task>;
  search(id: string): Promise<Task[]>;
  edit(task: Task): Promise<Task>;
  delete(id: string): Promise<Task>;

}

export { ITasksRepository };