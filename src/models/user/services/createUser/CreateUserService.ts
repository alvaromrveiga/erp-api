import { prisma } from "../../../../../prisma/prismaClient";
import { CreateUserDto } from "../../dtos/CreateUserDto";
import { hash } from "bcrypt";
import { UserWithoutPassDto } from "../../dtos/UserWithoutPassDto";

export class CreateUserService {
  constructor(private userRepository = prisma.user) {}

  async execute(data: CreateUserDto): Promise<UserWithoutPassDto> {
    const passwordHash = await hash(data.password, 10);

    data.password = passwordHash;
    data.email = data.email.toLowerCase();

    const user = await this.userRepository.create({
      data,
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
