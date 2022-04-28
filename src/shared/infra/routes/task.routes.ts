import { Roles } from "@prisma/client";
import { Router } from "express";
import { CreateTaskDto } from "../../../models/task/dtos/CreateTaskDto";
import { CreateTaskController } from "../../../models/task/useCases/createTask/CreateTaskController";
import { FindAllTasksController } from "../../../models/task/useCases/findAllTasks/FindAllTasksController";
import { UpdateTaskController } from "../../../models/task/useCases/updateTask/UpdateTaskController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRoles } from "../middlewares/ensureRoles";
import { validateRequestBody } from "../middlewares/validateRequestBody";

const taskRouter = Router();

taskRouter.post(
  "/",
  ensureAuthenticated,
  ensureRoles([Roles.ADMIN, Roles.PROJECT_LEADER]),
  validateRequestBody(CreateTaskDto),
  new CreateTaskController().handle
);

taskRouter.get("/", ensureAuthenticated, new FindAllTasksController().handle);

taskRouter.patch(
  "/:id",
  ensureAuthenticated,
  new UpdateTaskController().handle
);

export { taskRouter };
