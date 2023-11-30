import { Router } from "express";
import { userRouter} from "./userRouter";
import { contactRouter} from "./contactRouter";
import { typeRouter} from "./phoneTypeRouter"


export const router = Router();

router.use("/user", userRouter);
router.use("/contact", contactRouter);
router.use("/types", typeRouter);
