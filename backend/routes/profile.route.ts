import express from "express";
import {
  employeeProfile,
  changeEmployeePassword,
  updateEmployeeProfile,
} from "../controllers/profile.controllers";
import auth from "../middlewires/auth";

const router = express.Router();

router.route("/").get(auth, employeeProfile);
router.route("/changePassword").put(auth, changeEmployeePassword);
router.route("/edit").put(auth, updateEmployeeProfile);

export default router;
