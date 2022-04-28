import { Request, Response } from "express";
import { FindAllTasksService } from "./FindAllTasksService";

export class FindAllTasksController {
  async handle(request: Request, response: Response) {
    const findAllTasksService = new FindAllTasksService();

    const tasks = await findAllTasksService.execute();

    return response.status(200).json(tasks);
  }
}
