import express from "express";
import { getNotice, createNotice } from "../controllers/notice.controller";
import auth from "../middlewires/auth";
import admin from "../middlewires/admin";

const router = express.Router();

router.route("/").get(getNotice).post(auth, admin, createNotice);

export default router;
