import { NextFunction, Request, Response } from "express";

export const invalidPathHandler = (
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  res.status(404);
  res.send("invalid path");
};
