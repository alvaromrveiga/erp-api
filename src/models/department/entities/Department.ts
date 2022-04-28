import { Prisma } from "@prisma/client";

export class Department implements Prisma.DepartmentUncheckedCreateInput {
  id?: string;

  department: string;

  createdAt?: string | Date;
}
