import { Roles } from "@prisma/client";
import { prisma } from "../../../../../prisma/prismaClient";
import { UpdateTaskDto } from "../../dtos/UpdateTaskDto";
import { Task } from "../../entities/Task";

export class UpdateTaskService {
  constructor(
    private tasksRepository = prisma.tasks,
    private usersRepository = prisma.user
  ) {}

  async execute(
    id: string,
    data: UpdateTaskDto,
    userId: string
  ): Promise<Task> {
    const user = await this.usersRepository.findUnique({
      where: { id: userId },
    });

    const task = await this.tasksRepository.findUnique({ where: { id } });

    if (user.role === Roles.COMMON) {
      if (data.userId !== user.id) {
        throw new Error(
          "Task: Common users can only assign tasks to themselves"
        );
      }
    }

    if (user.role === Roles.PROJECT_LEADER || user.role === Roles.COMMON) {
      if (task.departmentId !== user.departmentId) {
        throw new Error(
          "Task: Common and Project_Leader users can only interact with tasks from their department"
        );
      }
    }

    const updatedTask = await this.tasksRepository.update({
      where: { id },
      data,
    });

    return updatedTask;
  }
}
