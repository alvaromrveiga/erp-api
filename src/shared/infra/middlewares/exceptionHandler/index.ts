import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { classValidatorExceptionHandler } from "./classValidatorExceptionHandler";
import {
  isPrismaClientUnknownError,
  prismaExceptionHandler,
} from "./prismaExceptionHandler";

export function exceptionHandler(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
): Response {
  if (isPrismaException(error)) {
    return prismaExceptionHandler(error, response);
  }

  if (isClassValidatorException(error)) {
    return classValidatorExceptionHandler(error, response);
  }

  if (error.message === "Invalid email or password!") {
    return response.status(400).json({ error: error.message });
  }

  return response.status(500).json({ error: error.message });
}

function isPrismaException(error: any) {
  return (
    error instanceof PrismaClientKnownRequestError ||
    isPrismaClientUnknownError(error)
  );
}

function isClassValidatorException(error: any) {
  return error[0] instanceof ValidationError;
}
