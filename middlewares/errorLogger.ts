import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";

export const errorLogger = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`status code: ${error.statusCode} \nerror: ${error.message}`);
  next(error);
};
