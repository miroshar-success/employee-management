import EmployeeInfo from "../models/employeeInfoModel";
import { Request, Response } from "express";
import bycrpt from "bcrypt";

const employeeProfile = async (req: any, res: Response): Promise<void> => {
  const user = await EmployeeInfo.findById(req.userInfo.id);
  if (!user) {
    res.status(400).send({ message: "User not found" });
    throw new Error("User not found");
  }
  res.status(200).json(user);
};

const updateEmployeeProfile = async (
  req: any,
  res: Response
): Promise<void> => {
  // const { name, address, image } = req.body;
  const user = await EmployeeInfo.findByIdAndUpdate(req.userInfo.id, req.body);

  if (!user) {
    res.status(400).send({ message: "User not found" });
    throw new Error("User not found");
  }

  res.status(200).json({ message: "Profile updated successfully" });
};

const changeEmployeePassword = async (
  req: any,
  res: Response
): Promise<void> => {
  const updatePassword = req.body.password;

  if (!updatePassword) {
    res.status(400).send({
      message: "Ops! Something worng. Please contact with admin",
    });
  }
  const user = await EmployeeInfo.findById(req.userInfo.id);
  if (!user) {
    res.status(400).send({ message: "User not found" });
    throw new Error("User not found");
  }

  const salt = await bycrpt.genSalt(10);
  const hash = await bycrpt.hash(updatePassword, salt);
  user.password = hash;
  await user.save();
  res.status(200).json({ message: "Password updated successfully" });
};
export { employeeProfile, changeEmployeePassword, updateEmployeeProfile };
