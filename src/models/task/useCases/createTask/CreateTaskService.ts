import { prisma } from "../../../../../prisma/prismaClient";
import { CreateTaskDto } from "../../dtos/CreateTaskDto";
import { Task } from "../../entities/Task";

export class CreateTaskService {
  constructor(private tasksRepository = prisma.tasks) {}

  async execute(data: CreateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.create({
      data,
    });

    return task;
  }
}
