import { prisma } from "../../../../../prisma/prismaClient";
import { UserWithoutPassDto } from "../../dtos/UserWithoutPassDto";

export class FindUserByEmailService {
  constructor(private usersRepository = prisma.user) {}

  async execute(email: string): Promise<UserWithoutPassDto> {
    const user = await this.usersRepository.findUnique({
      where: { email: email.toLowerCase() },
      include: { department: { select: { department: true } } },
      rejectOnNotFound: true,
    });

    delete user.password;

    return user;
  }
}
