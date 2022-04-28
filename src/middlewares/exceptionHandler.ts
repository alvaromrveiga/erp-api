import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { PrismaError } from "prisma-error-enum";

export function exceptionHandler(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
): Response {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case PrismaError.UniqueConstraintViolation:
        if (isEmailConstraintViolation(error.meta)) {
          return response.status(400).json({ error: "Email already in use" });
        }
      default:
        return response.status(400).json(error);
    }
  }

  if (error[0] instanceof ValidationError) {
    const errorMessageArray = generateValidationErrorMessageArray(error);

    return response.status(400).json({ error: errorMessageArray });
  }

  return response.status(500).json({ error: error.message });
}

function generateValidationErrorMessageArray(error: ValidationError[]) {
  let errorMessageArray = [];

  for (let i = 0; i < error.length; i++) {
    errorMessageArray.push(getValidationErrorDescription(error[i]));
  }

  return errorMessageArray;
}

function getValidationErrorDescription(error: ValidationError) {
  return Object.values(error.constraints).toString();
}

function isEmailConstraintViolation(errorMeta: object): boolean {
  return Object.values(errorMeta)[0][0] === "email";
}
