import EmployeeInfo from "../models/employeeInfoModel";
import { Request, Response } from "express";
import bycrpt from "bcrypt";

const addEmployeeInfo = async (req: Request, res: Response): Promise<void> => {
  const {
    name,
    email,
    password,
    role,
    phone,
    address,
    salary,
    image,
    designation,
    employeeStatus,
    joingDate,
    projectName,
    responsiblity,
    status,
    bonus,
    totalLeave,
    recentLeave,
  } = req.body;
  const employeeExists = await EmployeeInfo.findOne({ email });
  if (employeeExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const pass = password;

  const salt = await bycrpt.genSalt(10);
  const hash = await bycrpt.hash(pass, salt);

  const newEmpolyee = await EmployeeInfo.create({
    name,
    email,
    password: hash,
    role,
    phone,
    address,
    salary,
    image,
    designation,
    employeeStatus,
    joingDate,
    currentProjects: {
      projectName,
      responsiblity,
      status,
    },
    professionalInfo: {
      bonus,
      totalLeave,
      recentLeave,
    },
  });

  if (newEmpolyee) {
    res
      .status(201)
      .send({ newEmpolyee, message: "Employee added successfully" });
  } else {
    res.status(400).send("Invalid employee data");
    throw new Error("Invalid employee data");
  }
};

export { addEmployeeInfo };
