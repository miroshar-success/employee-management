import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/config";
import cors from "cors";
import addEmployee from "./routes/addUser.route";
import loginUser from "./routes/login.route";
import userInfo from "./routes/userInfo.route";

dotenv.config();
connectDB();

const app: Application = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/addemployee", addEmployee);
app.use("/api/v1/login", loginUser);
app.use("/api/v1/user", userInfo);

//test optimization
app.use("/api/v1/createEmployee", employee);

app.listen(process.env.PORT || 3001, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
