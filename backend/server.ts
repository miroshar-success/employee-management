import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/config";
import cors from "cors";
import addEmployee from "./routes/addEmployee.route";
import loginUser from "./routes/login.route";
import employeeInfo from "./routes/employeeInfo.route";
import addProjects from "./routes/addProject.route";
import projects from "./routes/projects.route";
import profile from "./routes/profile.route";
import imageUpload from "./routes/imageUpload.route";
//import employee from "./routes/test/employee.route";

dotenv.config();
connectDB();

const app: Application = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/addemployee", addEmployee);
app.use("/api/v1/login", loginUser);
app.use("/api/v1/employee", employeeInfo);
app.use("/api/v1/addprojects", addProjects);
app.use("/api/v1/projects", projects);
app.use("/api/v1/profile", profile);
app.use("/api/v1/uploads", imageUpload);

//test optimization
//app.use("/api/v1/createEmployee", employee);

app.listen(process.env.PORT || 3001, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
