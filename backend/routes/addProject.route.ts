import express from "express";
import { addProjects } from "../controllers/addProjects.controller";
import auth from "../middlewires/auth";
import admin from "../middlewires/admin";

const router = express.Router();

router.route("/").post(auth, admin, addProjects);

export default router;
