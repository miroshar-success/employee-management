import User from "../models/userModel";
import { Request, Response } from "express";
import bycrpt from "bcrypt";

const addEmployee = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, role, phone, address, salary, joingDate } =
    req.body;
  const employeeExists = await User.findOne({ email });
  if (employeeExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const pass = password;

  const salt = await bycrpt.genSalt(10);
  const hash = await bycrpt.hash(pass, salt);

  const newEmpolyee = await User.create({
    name,
    email,
    password: hash,
    role,
    phone,
    address,
    salary,
    joingDate,
  });

  if (newEmpolyee) {
    res.status(201).send("Employee added successfully");
  } else {
    res.status(400);
    throw new Error("Invalid employee data");
  }
};

export { addEmployee };
