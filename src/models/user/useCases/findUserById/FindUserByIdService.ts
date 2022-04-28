import { prisma } from "../../../../../prisma/prismaClient";
import { UserWithoutPassDto } from "../../dtos/UserWithoutPassDto";

export class FindUserByIdService {
  constructor(private usersRepository = prisma.user) {}

  async execute(id: string): Promise<UserWithoutPassDto> {
    const user = await this.usersRepository.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      departmentId: user.departmentId,
      createdAt: user.createdAt,
    };
  }
}
