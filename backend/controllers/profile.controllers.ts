import EmployeeInfo from "../models/employeeInfoModel";
import { Request, Response } from "express";

const employeeProfile = async (req: any, res: Response): Promise<void> => {
  const user = await EmployeeInfo.findById(req.userInfo.id);
  if (!user) {
    res.status(400).send({ message: "User not found" });
    throw new Error("User not found");
  }
  res.status(200).json(user);
};

export default employeeProfile;
