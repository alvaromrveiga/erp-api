import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = request.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      response.status(401).json({ error: "Please Authenticate" });
      return;
    }

    const { id, role } = jwt.verify(token, process.env.JWT_SECRET) as {
      id: string;
      role: string;
    };

    request.userId = id;
    request.userRole = role;

    next();
  } catch (error) {
    response.status(401).json({ error: "Please Authenticate" });
  }
};
