import { Prisma } from "@prisma/client";

export class Task implements Prisma.TasksUncheckedCreateInput {
  id?: string;

  description: string;

  dueDate?: string | Date;

  completed?: boolean;

  userId?: string;

  departmentId: string;

  createdAt?: string | Date;
}
