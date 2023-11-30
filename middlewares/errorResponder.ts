import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";

export const errorResponder = (
  error: AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  res.header("Content-Type", "application/json");

  const status = error.statusCode || 400;
  res.status(status).send(error.message);
};
