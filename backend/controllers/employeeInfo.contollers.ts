import EmployeeInfo from "../models/employeeInfoModel";
import { Request, Response } from "express";

const allEmployeeInfo = async (req: Request, res: Response): Promise<void> => {
  const users = await EmployeeInfo.find({});
  if (!users) {
    res.status(400).send({ message: "No users found" });
    throw new Error("No users found");
  }
  res.status(200).json(users);
};

const employeeInfo = async (req: Request, res: Response): Promise<void> => {
  const user = await EmployeeInfo.findById(req.params.id);

  if (!user) {
    res.status(400).send({ message: "User not found" });
    throw new Error("User not found");
  }
  res.status(200).json(user);
};

export { allEmployeeInfo, employeeInfo };
