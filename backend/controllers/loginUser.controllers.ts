import EmployeeInfo from "../models/employeeInfoModel";
import { Request, Response } from "express";
import bycrpt from "bcrypt";
import generatedToken from "../utils/jwtToken";
import { existingEmployee } from "../controllers/types/addUser.types";

const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const employeeExists: existingEmployee | null = await EmployeeInfo.findOne({
    email,
  });

  if (!employeeExists) {
    res.status(400).send({ message: "Invalid email or password" });
    throw new Error("User does not exists");
  }

  try {
    const dataPassword = await bycrpt.compare(
      password,
      employeeExists.password
    );
    if (!dataPassword) {
      res.status(400);
      throw new Error("Invalid credentials");
    }
    const token = generatedToken(
      employeeExists._id,
      employeeExists.name,
      employeeExists.email,
      employeeExists.role
    );
    if (!token) {
      res.status(400);
      throw new Error("Token not generated");
    }

    res.status(200).json({ token: token, employeeExists: employeeExists });
  } catch (error) {
    res.status(400).send("Invalid email or password");
  }
};

export default loginUser;
