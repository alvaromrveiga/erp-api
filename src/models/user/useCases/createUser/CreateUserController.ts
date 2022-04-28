import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password, name, role, departmentId } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      email,
      password,
      name,
      role,
      departmentId,
    });

    return response.status(201).json(user);
  }
}
