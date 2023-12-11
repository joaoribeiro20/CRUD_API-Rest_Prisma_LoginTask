import { Request, Response } from "express";
import { CreateUserService } from "../../Model/serviceUser/CreateUserService";

class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handle(request: Request, response: Response) {
    try {
      const { id, name, email, password, telefone, apelido, cep } = request.body;
      const user = await this.createUser.execute({id,name,email,password,telefone,apelido,cep,});

      return response.json(user);
    } catch (error) {
      console.error("Error in CreateUserController:", error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { CreateUserController };