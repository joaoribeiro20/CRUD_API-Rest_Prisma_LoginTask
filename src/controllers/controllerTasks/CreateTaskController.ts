import { Request, Response } from "express";
import { CreateTaskService } from "../../Model/serviceTask/CreateTaskService";

class CreateTaskController {
  constructor(private createTask: CreateTaskService) {}

  async handle(request: Request, response: Response) {
    try {
      const { title, description, categories, authorId } = request.body;
      const task = await this.createTask.execute({ title, description, categories, authorId });

      return response.json(task);
    } catch (error) {
      console.error("Error in CreateTaskController:", error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { CreateTaskController };