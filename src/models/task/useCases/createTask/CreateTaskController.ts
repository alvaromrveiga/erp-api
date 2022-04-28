import { Request, Response } from "express";
import { CreateTaskService } from "./CreateTaskService";

export class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { description, dueDate, departmentId, userId } = request.body;

    const createTaskService = new CreateTaskService();

    const task = await createTaskService.execute({
      description,
      dueDate,
      departmentId,
      userId,
    });

    return response.status(201).json(task);
  }
}
