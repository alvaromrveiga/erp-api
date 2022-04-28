import { prisma } from "../../../../../prisma/prismaClient";
import { CreateDepartmentDto } from "../../dtos/CreateDepartmentDto";
import { Department } from "../../entities/Department";

export class CreateDepartmentService {
  constructor(private departmentsRepository = prisma.department) {}

  async execute(data: CreateDepartmentDto): Promise<Department> {
    const department = await this.departmentsRepository.create({
      data,
    });

    return department;
  }
}
