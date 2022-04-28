import { Roles } from "@prisma/client";
import { Router } from "express";
import { CreateDepartmentDto } from "../../../models/department/dtos/CreateDepartmentDto";
import { CreateDepartmentController } from "../../../models/department/useCases/createDepartment/CreateDepartmentController";
import { FindAllDepartmentsController } from "../../../models/department/useCases/findAllDepartments/FindAllDepartmentsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureRoles } from "../middlewares/ensureRoles";
import { validateRequestBody } from "../middlewares/validateRequestBody";

const departmentRoutes = Router();

departmentRoutes.post(
  "/",
  ensureAuthenticated,
  ensureRoles([Roles.ADMIN]),
  validateRequestBody(CreateDepartmentDto),
  new CreateDepartmentController().handle
);

departmentRoutes.get(
  "/",
  ensureAuthenticated,
  new FindAllDepartmentsController().handle
);

export { departmentRoutes };
