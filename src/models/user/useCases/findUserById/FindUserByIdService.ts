import { prisma } from "../../../../../prisma/prismaClient";
import { UserWithoutPassDto } from "../../dtos/UserWithoutPassDto";

export class FindUserByIdService {
  constructor(private usersRepository = prisma.user) {}

  async execute(id: string): Promise<UserWithoutPassDto> {
    const user = await this.usersRepository.findUnique({
      where: { id },
      include: { department: { select: { department: true } } },
      rejectOnNotFound: true,
    });

    delete user.password;

    return user;
  }
}
