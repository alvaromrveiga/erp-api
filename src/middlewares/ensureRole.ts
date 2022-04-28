import { NextFunction, Request, Response } from "express";

export function ensureRoles(roles: string[]) {
  return function (request: Request, response: Response, next: NextFunction) {
    if (roles.includes(request.userRole)) {
      return next();
    }

    return response
      .status(403)
      .json({ error: "You don't have the required permissions" });
  };
}
