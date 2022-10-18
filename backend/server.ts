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
import forgetPassword from "./routes/forgetPassword.route";
import resetPassword from "./routes/resetPassword.route";
import { notFound } from "./middlewires/error";
import imageUpload from "./routes/imageUpload.route";
import path from "path";
// import employee from "./routes/test/employee.route";

dotenv.config();
connectDB();
const dirname = path.resolve();

const app: Application = express();

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use(express.json());

app.use("/api/v1/addemployee", addEmployee);
app.use("/api/v1/login", loginUser);
app.use("/api/v1/employee", employeeInfo);
app.use("/api/v1/addprojects", addProjects);
app.use("/api/v1/projects", projects);
app.use("/api/v1/profile", profile);
app.use("/api/v1/uploads", imageUpload);
app.use("/api/v1/forgetPassword", forgetPassword);
app.use("/api/v1/resetPassword", resetPassword);

app.use("/uploads", express.static(path.join(dirname, "/uploads")));
//test optimization
//app.use("/api/v1/createEmployee", employee);

app.use(notFound);

app.listen(process.env.PORT || 3001, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
