import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepositories";

class DeleteTaskService {
    constructor(private tasksRepository: ITasksRepository) { }
  
    async execute(id: string) {
        const task = await this.tasksRepository.delete(id)
        return task; 
    }
}

export { DeleteTaskService };