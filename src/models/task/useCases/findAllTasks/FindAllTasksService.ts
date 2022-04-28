import { prisma } from "../../../../../prisma/prismaClient";
import { Task } from "../../entities/Task";

export class FindAllTasksService {
  constructor(private tasksRepository = prisma.tasks) {}

  async execute(): Promise<Task[]> {
    const tasks = await this.tasksRepository.findMany({
      include: {
        department: { select: { department: true } },
        user: { select: { email: true } },
      },
    });

    return tasks;
  }
}
