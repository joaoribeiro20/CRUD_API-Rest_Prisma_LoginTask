import { Request, Response } from "express";
import { GetOneUserService } from "../../Model/servicesUser/GetOneUserService";

class GetOneUserController {
  constructor(private getUser: GetOneUserService) {}

  async handle(request: Request, response: Response) {
    try {
      const { email, password, id} = request.body;
      const user = await this.getUser.execute({email, password , id});

      return response.status(201).json(user);
    } catch (error) {
      console.error("Error in CreateUserController:", error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { GetOneUserController };