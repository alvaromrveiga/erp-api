import { Department } from "@prisma/client";
import { prisma } from "../../../prisma/prismaClient";
import { CreateUserDto } from "../../models/user/dtos/CreateUserDto";
import { CreateUserService } from "../../models/user/useCases/createUser/CreateUserService";

async function createAdminUser() {
  try {
    const departmentHR = await getHRDepartment();

    const createUserService = new CreateUserService();

    const adminUserAlreadyExists = await prisma.user.findUnique({
      where: { email: "admin@example.com" },
      rejectOnNotFound: false,
    });

    if (adminUserAlreadyExists) {
      await prisma.user.delete({ where: { email: "admin@example.com" } });
    }

    const data = {
      email: "admin@example.com",
      name: "Admin",
      password: process.env.ADMIN_PASSWORD,
      role: "ADMIN",
      departmentId: departmentHR.id,
    } as CreateUserDto;

    await createUserService.execute(data);
  } catch (error) {}
}

async function getHRDepartment(): Promise<Department> {
  let departmentHR = await prisma.department.findUnique({
    where: { department: "Human Resources" },
  });

  if (!departmentHR) {
    departmentHR = await prisma.department.create({
      data: {
        department: "Human Resources",
      },
    });
  }

  return departmentHR;
}

createAdminUser();
