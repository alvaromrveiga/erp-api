import { Request, Response, Router } from "express";
import { CreateUserController } from "./models/user/services/createUser/CreateUserController";

const router = Router();

router.post("/user", new CreateUserController().handle);

router.get("/", async (request: Request, response: Response) => {
  return response.json({ message: "Hello world" });
});

export { router };
