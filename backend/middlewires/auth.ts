import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const auth = (req: any, res: Response, next: NextFunction) => {
  let token = req.header("Authorization");
  if (!token) {
    res.status(401).send("Access denied. No token provided");
    throw new Error("Not authorized, no token");
  }

  try {
    const decoded = jwt.verify(
      token.split(" ")[1].trim(),
      process.env.JWT_KEY as string
    );
    req.userInfo = decoded;
    next();
  } catch (error) {
    res.status(403).send("Unauthorized access");
  }
};

export default auth;
