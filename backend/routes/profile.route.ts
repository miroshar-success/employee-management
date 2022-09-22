import express from "express";
import employeeProfile from "../controllers/profile.controllers";
import auth from "../middlewires/auth";

const router = express.Router();

router.route("/").get(auth, employeeProfile);

export default router;
