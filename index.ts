import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors';
import { requestLogger } from "./middlewares/requestLogger";
import { router } from "./routers";
import { errorLogger } from "./middlewares/errorLogger";
import { errorResponder } from "./middlewares/errorResponder";
import { invalidPathHandler } from "./middlewares/invalidPathHandler";



dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());

app.use(requestLogger);

app.use("/api", router);

app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
