import { Router } from "express";
import { LoginController } from "../../../models/auth/useCases/login/LoginController";
import { userRouter } from "./user.routes";

const router = Router();

router.post("/login", new LoginController().handle);

router.use("/user", userRouter);

export { router };
