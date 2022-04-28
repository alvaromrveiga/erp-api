import { Request, Response } from "express";
import { UpdateTaskService } from "./UpdateTaskService";

export class UpdateTaskController {
  async handle(request: Request, response: Response) {
    const { userId } = request;

    const { id } = request.params;
    const {
      description,
      completed,
      dueDate,
      departmentId,
      userId: assignedUserId,
    } = request.body;

    const updateTaskService = new UpdateTaskService();

    const task = await updateTaskService.execute(
      id,
      {
        description,
        completed,
        dueDate,
        departmentId,
        userId: assignedUserId,
      },
      userId
    );

    return response.status(200).json(task);
  }
}
