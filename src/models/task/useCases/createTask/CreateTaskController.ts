import { Request, Response } from "express";
import { CreateTaskService } from "./CreateTaskService";

export class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { userId } = request;
    const {
      description,
      dueDate,
      departmentId,
      userId: assignedUserId,
    } = request.body;

    const createTaskService = new CreateTaskService();

    const task = await createTaskService.execute(userId, {
      description,
      dueDate,
      departmentId,
      userId: assignedUserId,
    });

    return response.status(201).json(task);
  }
}
