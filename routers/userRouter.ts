import {
  registration,
  login,
  refreshToken,
  checkAdm,
  getAll
} from "../controllers/userController";

import { Router, RequestHandler } from "express";
import { tokenHandler } from "../middlewares/tokenHandler";
export const userRouter = Router();

userRouter.post("/registration", registration as RequestHandler);
userRouter.post("/login", login as RequestHandler);
userRouter.post("/refreshToken",tokenHandler as RequestHandler, refreshToken as RequestHandler);



userRouter.get("/checkAdm",  tokenHandler as RequestHandler, checkAdm as RequestHandler)
userRouter.get("/getall",  tokenHandler as RequestHandler, getAll as RequestHandler)
