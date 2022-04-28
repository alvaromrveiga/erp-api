import { Request, Response } from "express";
import { FindUserByIdService } from "./FindUserByIdService";

export class FindUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findUserByIdService = new FindUserByIdService();

    const user = await findUserByIdService.execute(id);

    return response.status(200).json(user);
  }
}
