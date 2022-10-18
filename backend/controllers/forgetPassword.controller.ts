import EmployeeInfo from "../models/employeeInfoModel";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bycrpt from "bcrypt";

const postForgetPassword = async (req: any, res: Response) => {
  const { email } = req.body;
  const employeeExists = await EmployeeInfo.findOne({ email });
  if (!employeeExists) {
    res.status(400);
    throw new Error("User not exists");
  }
  const screct = process.env.JWT_KEY + employeeExists.password;
  const token = jwt.sign(
    { _id: employeeExists._id, email: employeeExists.email },
    screct,
    {
      expiresIn: "15m",
    }
  );
  const link = `http://localhost:3000/resetPassword/${employeeExists._id}/${token}`;

  const client = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "test.development1001@gmail.com",
      pass: "mtvzvtgpowpqsrou",
    },
  });

  client.sendMail({
    from: "resetPassword@abccompany.com",
    to: "alaminsahed97@gmail.com",
    subject: "Reset Password",
    text: `
    Hello ${employeeExists.name},
    Please click on the link to reset your password: ${link}
    Regards,
    ABC Company
    `,
  });

  res.status(200).json({ link });
};

const getRestPassword = async (req: Request, res: Response) => {
  const { id, token } = req.params;
  // res.send(req.params);
  const employeeExists = await EmployeeInfo.findById(id);
  if (!employeeExists) {
    res.status(400);
    throw new Error("User not exists");
  }
  const screct = process.env.JWT_KEY + employeeExists.password;
  try {
    const decoded: any = jwt.verify(token, screct);
    res.status(200).json({ decoded });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const postRestPassword = async (req: Request, res: Response) => {
  const { id, email, password } = req.body;
  const employeeExists = await EmployeeInfo.findById(id);
  if (!employeeExists) {
    res.status(400);
    throw new Error("User not exists");
  }
  const salt = await bycrpt.genSalt(10);
  const hash = await bycrpt.hash(password, salt);
  employeeExists.password = hash;
  await employeeExists.save();
  res.status(200).json({ message: "Password updated successfully" });
};
export { postForgetPassword, getRestPassword, postRestPassword };
