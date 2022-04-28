import { validateOrReject } from "class-validator";
import { NextFunction, Request, Response } from "express";

export function validateRequestBody(RulesClass: any) {
  return async function (
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const object = new RulesClass(request.body);

    await validateOrReject(object);

    return next();
  };
}
