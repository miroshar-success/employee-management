import express from "express";
import loginUser from "../controllers/loginUser.controllers";

const router = express.Router();

router.route("/").post(loginUser);

export default router;
