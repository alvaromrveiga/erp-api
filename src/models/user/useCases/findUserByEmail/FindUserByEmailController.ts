import { Request, Response } from "express";
import { FindUserByEmailService } from "./FindUserByEmailService";

export class FindUserByEmailController {
  async handle(request: Request, response: Response) {
    const { email } = request.params;

    const findUserByEmailService = new FindUserByEmailService();

    const user = await findUserByEmailService.execute(email);

    return response.status(201).json(user);
  }
}
