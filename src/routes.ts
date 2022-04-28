import { Roles } from "@prisma/client";
import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureRoles } from "./middlewares/ensureRoles";
import { validateRequestBody } from "./middlewares/validateRequestBody";
import { LoginController } from "./models/auth/useCases/login/LoginController";
import { CreateUserDto } from "./models/user/dtos/CreateUserDto";
import { CreateUserController } from "./models/user/useCases/createUser/CreateUserController";
import { FindUserByEmailController } from "./models/user/useCases/findUserByEmail/FindUserByEmailController";
import { FindUserByIdController } from "./models/user/useCases/findUserById/FindUserByIdController";

const router = Router();

router.post("/login", new LoginController().handle);

router.post(
  "/user",
  ensureAuthenticated,
  ensureRoles([Roles.HUMAN_RESOURCES, Roles.ADMIN]),
  validateRequestBody(CreateUserDto),
  new CreateUserController().handle
);

router.get(
  "/user/:id",
  ensureAuthenticated,
  ensureRoles([Roles.HUMAN_RESOURCES, Roles.ADMIN]),
  new FindUserByIdController().handle
);

router.get(
  "/user/email/:email",
  ensureAuthenticated,
  ensureRoles([Roles.HUMAN_RESOURCES, Roles.ADMIN]),
  new FindUserByEmailController().handle
);

export { router };
