import { ValidationError } from "class-validator";
import { Response } from "express";

export function classValidatorExceptionHandler(error: any, response: Response) {
  const errorMessageArray = generateValidationErrorMessageArray(error);

  return response.status(400).json({ error: errorMessageArray });
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
