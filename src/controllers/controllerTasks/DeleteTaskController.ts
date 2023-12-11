import { Request, Response } from "express";
import { DeleteTaskService } from "../../Model/serviceTask/DeleteTaskService";

class DeleteTaskController {
  constructor(private deleteTask: DeleteTaskService) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const task = await this.deleteTask.execute(id)

      return response.json(task);
    } catch (error) {
      console.error("Error in DeleteTaskController:", error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { DeleteTaskController };