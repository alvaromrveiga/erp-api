import { validateOrReject } from "class-validator";
import { Request, Response } from "express";
import { LoginCredentialsDto } from "../../dtos/LoginCredentialsDto";
import { LoginService } from "./LoginService";

export class LoginController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const data = new LoginCredentialsDto({
      email,
      password,
    });
    await validateOrReject(data);

    const loginService = new LoginService();

    const user = await loginService.execute(data);

    return response.status(201).json(user);
  }
}
