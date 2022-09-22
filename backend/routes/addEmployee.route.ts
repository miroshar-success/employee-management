import express from "express";
import { addEmployeeInfo } from "../controllers/addEmployee.controllers";
import auth from "../middlewires/auth";
import admin from "../middlewires/admin";

const router = express.Router();

router.route("/").post(auth, admin, addEmployeeInfo);

export default router;
