import { Request, Response } from "express";
import Notice from "../models/noticeModel";

export const getNotice = async (req: Request, res: Response) => {
  try {
    const notice = await Notice.find({});
    res.status(200).json(notice);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createNotice = async (req: Request, res: Response) => {
  const notice = req.body;
  const newNotice = new Notice(notice);
  try {
    await newNotice.save();
    res.status(201).json(newNotice);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};
