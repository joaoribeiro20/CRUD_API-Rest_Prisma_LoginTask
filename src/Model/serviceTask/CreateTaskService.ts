import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepositories";

interface ITaskRequest {
    title: string;
    description: string;
    categories: string;
    authorId: string;

}

class CreateTaskService {
    constructor(private tasksRepository: ITasksRepository) { }
  
    async execute({ title, description, categories, authorId, }: ITaskRequest) {
        const taskCreate = Task.create({title, description, categories, authorId})

        const task = await this.tasksRepository.create(taskCreate);
        return task; 
        
    }
}

export { CreateTaskService };