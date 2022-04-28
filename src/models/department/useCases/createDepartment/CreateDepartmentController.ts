import { Request, Response } from "express";
import { CreateDepartmentService } from "./CreateDepartmentService";

export class CreateDepartmentController {
  async handle(request: Request, response: Response) {
    const { department: departmentName } = request.body;

    const createDepartmentService = new CreateDepartmentService();

    const department = await createDepartmentService.execute({
      department: departmentName,
    });

    return response.status(201).json(department);
  }
}
