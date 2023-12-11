import { Request, Response } from "express";
import { EditTaskService } from "../../Model/serviceTask/EditTaskService";

class EditTaskController {
  constructor(private editTask: EditTaskService) {}

  async handle(request: Request, response: Response) {
    try {
      const { id, title, description, categories, statu, authorId } = request.body;
      const task = await this.editTask.execute({ id, title, description, categories, statu, authorId });

      return response.json(task);
    } catch (error) {
      console.error("Error in EditTaskController:", error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { EditTaskController };