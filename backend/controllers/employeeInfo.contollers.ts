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

const editEmployeeInfo = async (req: any, res: Response): Promise<void> => {
  const user = await EmployeeInfo.findByIdAndUpdate(req.params.id, req.body);
  if (!user) {
    res.status(400).send({ message: "User not found" });
    throw new Error("User not found");
  }
  res.status(200).json({ message: "User updated successfully" });
};

const deleteEmployeeInfo = async (req: any, res: Response): Promise<void> => {
  const user = await EmployeeInfo.findByIdAndDelete(req.params.id);
  if (!user) {
    res.status(400).json({ user, message: "Oops! Something went wrong" });
  }
  res.status(200).send({ user, message: "User Sucessfully Deleted" });
};
export { allEmployeeInfo, employeeInfo, editEmployeeInfo, deleteEmployeeInfo };
