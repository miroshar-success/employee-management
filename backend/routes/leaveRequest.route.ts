import express from "express";
import {
  addLeaveRequest,
  getLeaveRequests,
  resolveLeaveRequest,
} from "../controllers/leaveRequest.controllers";
import auth from "../middlewires/auth";
import admin from "../middlewires/admin";

const router = express.Router();

router.route("/").post(auth, addLeaveRequest);
router.route("/").get(auth, getLeaveRequests);
router.route("/resolve/:id").put(auth, admin, resolveLeaveRequest);
export default router;
