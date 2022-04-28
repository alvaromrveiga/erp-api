import { prisma } from "../../../../../prisma/prismaClient";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { LoginCredentialsDto } from "../../dtos/LoginCredentialsDto";

export class LoginService {
  constructor(private usersRepository = prisma.user) {}

  async execute(data: LoginCredentialsDto): Promise<{ token: string }> {
    const user = await this.usersRepository.findUnique({
      where: { email: data.email.toLowerCase() },
    });

    if (!user) {
      throw new Error("Invalid email or password!");
    }

    const isCorrectPassword = await compare(data.password, user.password);

    if (!isCorrectPassword) {
      throw new Error("Invalid email or password!");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return {
      token,
    };
  }
}
