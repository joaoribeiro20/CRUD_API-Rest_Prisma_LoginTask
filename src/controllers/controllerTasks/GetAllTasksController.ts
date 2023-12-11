import { Request, Response } from "express";
import { GetAllTasksService } from "../../Model/serviceTask/GetAllTasksService";

class GetAllTasksController {
  constructor(private getAllTask: GetAllTasksService) {}

  async handle(request: Request, response: Response) {
    try {
      const { authorId } = request.params;
      const task = await this.getAllTask.execute(authorId)

      return response.json(task);
    } catch (error) {
      console.error("Error in GetAllTasksController:", error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { GetAllTasksController };