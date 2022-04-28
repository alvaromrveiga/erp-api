import { Request, Response, Router } from "express";
import { CreateUserController } from "./models/user/services/createUser/CreateUserController";
import { FindUserByEmailController } from "./models/user/services/findUserByEmail/FindUserByEmailController";

const router = Router();

router.post("/user", new CreateUserController().handle);

router.get("/user/email", new FindUserByEmailController().handle);

router.get("/", async (request: Request, response: Response) => {
  return response.json({ message: "Hello world" });
});

export { router };
