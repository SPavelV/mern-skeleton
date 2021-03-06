import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import Template from "./../template";

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send(Template());
});

export default app;
