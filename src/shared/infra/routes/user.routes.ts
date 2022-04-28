import { Roles } from "@prisma/client";
import { Router } from "express";
import { CreateUserDto } from "../../../models/user/dtos/CreateUserDto";
import { CreateUserController } from "../../../models/user/useCases/createUser/CreateUserController";
import { FindUserByEmailController } from "../../../models/user/useCases/findUserByEmail/FindUserByEmailController";
import { FindUserByIdController } from "../../../models/user/useCases/findUserById/FindUserByIdController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRoles } from "../middlewares/ensureRoles";
import { validateRequestBody } from "../middlewares/validateRequestBody";

const userRouter = Router();

userRouter.post(
  "/",
  ensureAuthenticated,
  ensureRoles([Roles.HUMAN_RESOURCES, Roles.ADMIN]),
  validateRequestBody(CreateUserDto),
  new CreateUserController().handle
);

userRouter.get(
  "/:id",
  ensureAuthenticated,
  ensureRoles([Roles.HUMAN_RESOURCES, Roles.ADMIN]),
  new FindUserByIdController().handle
);

userRouter.get(
  "/email/:email",
  ensureAuthenticated,
  ensureRoles([Roles.HUMAN_RESOURCES, Roles.ADMIN]),
  new FindUserByEmailController().handle
);

export { userRouter };
