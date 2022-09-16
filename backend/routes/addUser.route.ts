import express from "express";
import { addEmployee } from "../controllers/addUser.controllers";
import auth from "../middlewires/auth";
import admin from "../middlewires/admin";

const router = express.Router();

router.route("/").post(auth, admin, addEmployee);

export default router;
