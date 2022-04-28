import { prisma } from "../../../../../prisma/prismaClient";
import { Department } from "../../entities/Department";

export class FindAllDepartmentsService {
  constructor(private departmentsRepository = prisma.department) {}

  async execute(): Promise<Department[]> {
    const departments = await this.departmentsRepository.findMany();

    return departments;
  }
}
