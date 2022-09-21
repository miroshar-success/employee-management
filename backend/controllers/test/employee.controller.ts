import Employee from "../../models/test/employeeModel";
import { Request, Response } from "express";
import bycrpt from "bcrypt";

const addEmployee = async (req: Request, res: Response): Promise<void> => {
  const {
    name,
    email,
    password,
    role,
    phone,
    address,
    salary,
    joingDate,
    projectName,
    responsiblity,
    status,
    bonus,
    totalLeave,
  } = req.body;
  const employeeExists = await Employee.findOne({ email });
  if (employeeExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const pass = password;

  const salt = await bycrpt.genSalt(10);
  const hash = await bycrpt.hash(pass, salt);

  const newEmpolyee = await Employee.create({
    name,
    email,
    password: hash,
    role,
    phone,
    address,
    salary,
    joingDate,
    currentProjects: {
      projectName,
      responsiblity,
      status,
    },
    professionalInfo: {
      bonus,
      totalLeave,
    },
  });

  if (newEmpolyee) {
    res.status(201).send("Employee added successfully");
  } else {
    res.status(400);
    throw new Error("Invalid employee data");
  }
};

export { addEmployee };
