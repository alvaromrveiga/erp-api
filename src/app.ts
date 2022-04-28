import express from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";
import { exceptionHandler } from "./middlewares/exceptionHandler";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(exceptionHandler);

export { app };
