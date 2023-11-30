import {
    getPhoneTypes,
    addPhoneTypes,
    deletePhoneTypes
}from "../controllers/phoneTypesController"
import { Router, RequestHandler } from "express";
import { tokenHandler } from "../middlewares/tokenHandler";

export const typeRouter = Router();

typeRouter.get("/", tokenHandler as RequestHandler, getPhoneTypes as RequestHandler)
typeRouter.post("/", tokenHandler as RequestHandler, addPhoneTypes as RequestHandler)
typeRouter.delete("/", tokenHandler as RequestHandler, deletePhoneTypes as RequestHandler)

