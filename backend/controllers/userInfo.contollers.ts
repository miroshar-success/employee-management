import User from "../models/userModel";
import { Request, Response } from "express";

const allUserInfo = async (req: Request, res: Response): Promise<void> => {
  const users = await User.find({});
  if (!users) {
    res.status(400);
    throw new Error("No users found");
  }
  res.status(200).json(users);
};

const userInfo = async (req: Request, res: Response): Promise<void> => {
  //const { id } = req.params;
  //console.log(id);
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  res.status(200).json(user);
};

const employeeOwnInfo = async (req: any, res: Response): Promise<void> => {
  // const { id } = req.userInfo;
  const user = await User.findById(req.userInfo.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  res.status(200).json(user);
};

// const userInfo = async (req: Request, res: Response): Promise<void> => {
//   //const { id } = req.params;
//   //console.log(id);
//   const user = await User.findById(req.params.id);
//   console.log(user);
//   if (!user) {
//     res.status(400);
//     throw new Error("User not found");
//   }
//   res.status(200).json(user);
// };

export { allUserInfo, employeeOwnInfo, userInfo };
