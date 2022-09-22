import express from "express";
import {
  allEmployeeInfo,
  employeeInfo,
  editEmployeeInfo,
  deleteEmployeeInfo,
} from "../controllers/employeeInfo.contollers";
import auth from "../middlewires/auth";
import admin from "../middlewires/admin";

const router = express.Router();

router.route("/").get(auth, admin, allEmployeeInfo);
router
  .route("/:id")
  .get(auth, admin, employeeInfo)
  .put(auth, admin, editEmployeeInfo)
  .delete(auth, admin, deleteEmployeeInfo);

export default router;
