import { Request, Response } from "express";
import { FindAllDepartmentsService } from "./FindAllDepartmentsService";

export class FindAllDepartmentsController {
  async handle(request: Request, response: Response) {
    const findAllDepartmentsService = new FindAllDepartmentsService();

    const user = await findAllDepartmentsService.execute();

    return response.status(200).json(user);
  }
}
