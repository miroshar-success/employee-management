import LeaveReq from "../models/leaveReqModel";
import { Request, Response } from "express";
import mongoose from "mongoose";

const addLeaveRequest = async (req: Request, res: Response): Promise<void> => {
  const { leaveRequestDate, leaveType, leaveReason, employee } = req.body;
  const newLeaveReq = await LeaveReq.create({
    leaveRequestDate,
    leaveType,
    leaveReason,
    employee: employee,
  });

  if (newLeaveReq) {
    res.status(201).json(newLeaveReq);
  } else {
    res.status(400);
    throw new Error("Invalid leave request data");
  }
};

const resolveLeaveRequest = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { leaveStatus, resolvedBy } = req.body;
  const leaveReq = await LeaveReq.findById(req.params.id);
  if (leaveReq) {
    leaveReq.leaveStatus = leaveStatus;
    leaveReq.resolvedBy = resolvedBy;
    const updatedLeaveReq = await leaveReq.save();
    res.json(updatedLeaveReq);
  } else {
    res.status(404);
    throw new Error("Leave request not found");
  }
};

const getLeaveRequests = async (req: Request, res: Response): Promise<void> => {
  const leaveRequests = await LeaveReq.find({}).populate("employee");
  res.json(leaveRequests);
};
export { addLeaveRequest, resolveLeaveRequest, getLeaveRequests };
