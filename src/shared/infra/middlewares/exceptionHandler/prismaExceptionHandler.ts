import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Response } from "express";
import { PrismaError } from "prisma-error-enum";

export function prismaExceptionHandler(error: Error, response: Response) {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case PrismaError.UniqueConstraintViolation:
        if (isEmailConstraintViolation(error.meta)) {
          return response.status(400).json({ error: "Email already in use" });
        }
      default:
        return response.status(400).json({ error });
    }
  }

  if (isPrismaClientUnknownError(error)) {
    if (error.name === "NotFoundError") {
      return response.status(404).json({ error: error.message });
    }

    return response.status(500).json({ error });
  }
}

function isEmailConstraintViolation(errorMeta: object): boolean {
  return Object.values(errorMeta)[0][0] === "email";
}

export function isPrismaClientUnknownError(error: any) {
  return !!error.clientVersion;
}
