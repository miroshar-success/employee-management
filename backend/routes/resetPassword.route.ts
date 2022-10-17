import express from "express";
import { getRestPassword } from "../controllers/forgetPassword.controller";

const router = express.Router();

router.route("/:id/:token").get(getRestPassword);

export default router;
