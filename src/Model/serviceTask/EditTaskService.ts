import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepositories";
interface ITaskRequest {
    id: string;
    title: string;
    description: string;
    categories: string;
    statu: boolean;
    authorId:string
}

class EditTaskService {
    constructor(private tasksRepository: ITasksRepository) { }
  
    async execute({ id, title, description, categories, statu, authorId }: ITaskRequest) {
       
        const task = await this.tasksRepository.edit({ id, title, description, categories, statu, authorId })
        return task; 
    }
}

export { EditTaskService };