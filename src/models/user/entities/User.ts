import { Prisma, Roles } from "@prisma/client";

export class User implements Prisma.UserUncheckedCreateInput {
  id?: string;

  email: string;

  password: string;

  name: string;

  role: Roles;

  departmentId: string;

  createdAt?: string | Date;
}
