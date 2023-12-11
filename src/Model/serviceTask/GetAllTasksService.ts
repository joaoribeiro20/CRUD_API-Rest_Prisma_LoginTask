import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepositories";

class GetAllTasksService {
    constructor(private tasksRepository: ITasksRepository) { }
  
    async execute(authorId: string) {
        const tasks = await this.tasksRepository.search(authorId)
        return tasks; 
    }
}

export { GetAllTasksService };