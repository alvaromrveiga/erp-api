import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { LoginController } from "./models/auth/useCases/login/LoginController";
import { CreateUserController } from "./models/user/useCases/createUser/CreateUserController";
import { FindUserByEmailController } from "./models/user/useCases/findUserByEmail/FindUserByEmailController";
import { FindUserByIdController } from "./models/user/useCases/findUserById/FindUserByIdController";

const router = Router();

router.post("/login", new LoginController().handle);

router.post("/user", ensureAuthenticated, new CreateUserController().handle);

router.get(
  "/user/:id",
  ensureAuthenticated,
  new FindUserByIdController().handle
);

router.get(
  "/user/email/:email",
  ensureAuthenticated,
  new FindUserByEmailController().handle
);

export { router };
