import { Roles } from "@prisma/client";
import { prisma } from "../../../../../prisma/prismaClient";
import { CreateTaskDto } from "../../dtos/CreateTaskDto";
import { Task } from "../../entities/Task";

export class CreateTaskService {
  constructor(
    private tasksRepository = prisma.tasks,
    private usersRepository = prisma.user
  ) {}

  async execute(userId: string, data: CreateTaskDto): Promise<Task> {
    const user = await this.usersRepository.findUnique({
      where: { id: userId },
    });

    if (user.role === Roles.PROJECT_LEADER) {
      if (data.departmentId !== user.departmentId) {
        throw new Error(
          "Task: Project Leaders can only create tasks in their department"
        );
      }
    }

    const task = await this.tasksRepository.create({
      data,
    });

    return task;
  }
}
