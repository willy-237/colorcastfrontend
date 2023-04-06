import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import helmet from "helmet";
import cors from "cors";
import path from "path-browserify"
import tourRoute from "./Routes/tourRoute.js";
import authRoutes from "./Routes/authRoutes.js";
import clientRoute from "./Routes/clientRoutes.js"




const app = express()
const CURRENT_WORKING_DIR = process.cwd();


app.use(express.static(path.join(CURRENT_WORKING_DIR, "server/static")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());


app.use("/", authRoutes);
app.use("/", clientRoute);
app.use("/", tourRoute);





export default app;