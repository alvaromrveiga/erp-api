import { Request, Response } from "express";
import { CreateDepartmentService } from "./CreateDepartmentService";

export class CreateDepartmentController {
  async handle(request: Request, response: Response) {
    const { department } = request.body;

    const createDepartmentService = new CreateDepartmentService();

    const user = await createDepartmentService.execute({ department });

    return response.status(201).json(user);
  }
}
