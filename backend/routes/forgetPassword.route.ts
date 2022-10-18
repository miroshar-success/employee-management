import express from "express";
import { postForgetPassword } from "../controllers/forgetPassword.controller";

const router = express.Router();

router.route("/").post(postForgetPassword);

export default router;
