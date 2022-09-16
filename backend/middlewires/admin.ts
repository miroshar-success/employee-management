import { Request, Response, NextFunction } from "express";

const admin = (req: any, res: Response, next: NextFunction) => {
  if (req.userInfo.role === "admin") {
    next();
  } else {
    res.status(403).send("Contact admin for access");
  }
};

export default admin;
