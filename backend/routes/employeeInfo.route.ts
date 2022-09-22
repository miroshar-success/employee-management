import express from "express";
import {
  allEmployeeInfo,
  employeeOwnInfo,
  employeeInfo,
} from "../controllers/employeeInfo.contollers";
import auth from "../middlewires/auth";
import admin from "../middlewires/admin";

const router = express.Router();

router.route("/").get(auth, admin, allEmployeeInfo);
router.route("/:id").get(auth, admin, employeeInfo);

export default router;
