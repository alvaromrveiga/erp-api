import { validateOrReject } from "class-validator";
import { Request, Response } from "express";
import { CreateUserDto } from "../../dtos/CreateUserDto";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password, name, role, departmentId } = request.body;

    const data = new CreateUserDto({
      email,
      password,
      name,
      role,
      departmentId,
    });
    await validateOrReject(data);

    const createUserService = new CreateUserService();

    const user = await createUserService.execute(data);

    return response.status(201).json(user);
  }
}
