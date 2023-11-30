import {
    createNewContact, 
    updateContact,
    deletePhonesToContact,
    addPhoneToContact,
    deleteContact,
    getContacts,
    getContact,

} from "../controllers/contactController"
import { Router, RequestHandler } from "express";
import { tokenHandler } from "../middlewares/tokenHandler";

export const contactRouter = Router();

contactRouter.post("/createContact", tokenHandler as RequestHandler,createNewContact as RequestHandler)
contactRouter.post("/updateContact", tokenHandler as RequestHandler,updateContact as RequestHandler)

contactRouter.post("/createNumberToContact" , tokenHandler as RequestHandler, addPhoneToContact as RequestHandler )
contactRouter.delete("/deleteNumbersToContact" , tokenHandler as RequestHandler, deletePhonesToContact as RequestHandler )


contactRouter.delete("/deleteContact", tokenHandler as RequestHandler, deleteContact as RequestHandler)

contactRouter.get("/getall", tokenHandler as RequestHandler,getContacts as RequestHandler)
contactRouter.get("/getContact", tokenHandler as RequestHandler, getContact as RequestHandler)


// Admin
