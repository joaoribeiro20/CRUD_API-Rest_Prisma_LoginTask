import { Request, Response } from "express";
import { GetUserIDService } from "../../Model/serviceUser/GetUserIDService";

class GetUserIDController {
  constructor(private getUserID: GetUserIDService) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const user = await this.getUserID.execute(id);

      return response.status(201).json(user);
    } catch (error) {
      console.error("Error in CreateUserController:", error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { GetUserIDController };